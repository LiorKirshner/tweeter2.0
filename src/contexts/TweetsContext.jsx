import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { fetchTweets, createTweet } from "../lib/tweetsApi";
import { useProfile } from "./ProfileContext";

function tweetsReducer(state, action) {
  switch (action.type) {
    case "LOAD_TWEETS":
      // Sort tweets by date in descending order (newest first)
      return action.payload.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    case "ADD_TWEET":
      return [action.payload, ...state];
    
    case "UPDATE_TWEETS":
      // Update only if there are actually new tweets
      const currentIds = state.map(tweet => tweet.id);
      const newTweets = action.payload.filter(tweet => !currentIds.includes(tweet.id));
      if (newTweets.length > 0) {
        return [...newTweets, ...state].sort((a, b) => new Date(b.date) - new Date(a.date));
      }
      return state;
    
    default:
      return state;
  }
}

const TweetsContext = createContext();

export function TweetsProvider({ children }) {
  const [tweets, dispatch] = useReducer(tweetsReducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const { currentUser } = useProfile();

  // Load tweets from server on component mount
  useEffect(() => {
    async function loadTweets() {
      try {
        setIsLoading(true);
        const serverTweets = await fetchTweets();
        dispatch({ type: "LOAD_TWEETS", payload: serverTweets });
      } catch (error) {
        console.error("Failed to load tweets:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadTweets();
  }, []);

  // Polling interval to check for new tweets from other users
  useEffect(() => {
    const POLLING_INTERVAL = 10000; // 10 seconds
    
    const interval = setInterval(async () => {
      try {
        const serverTweets = await fetchTweets();
        dispatch({ type: "UPDATE_TWEETS", payload: serverTweets });
      } catch (error) {
        console.error("Failed to poll tweets:", error);
      }
    }, POLLING_INTERVAL);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const addTweetToServer = async (content) => {
    // Prevent duplicate requests
    if (isCreating) return;

    try {
      setIsCreating(true);
      const newTweet = {
        content: content,
        userName: currentUser,
        date: new Date().toISOString(),
      };
      
      // Add to local list immediately (no need to wait for server)
      const createdTweet = await createTweet(newTweet);
      const tweetToAdd = Array.isArray(createdTweet)
        ? createdTweet[0]
        : createdTweet;
      
      dispatch({ type: "ADD_TWEET", payload: tweetToAdd });
    } catch (error) {
      console.error("Failed to create tweet:", error);
    } finally {
      setIsCreating(false);
    }
  };

  const value = {
    tweets,
    addTweet: addTweetToServer,
    isLoading,
    isCreating,
  };

  return (
    <TweetsContext.Provider value={value}>{children}</TweetsContext.Provider>
  );
}

export function useTweets() {
  const context = useContext(TweetsContext);
  if (!context) {
    throw new Error("useTweets must be used within a TweetsProvider");
  }
  return context;
}
