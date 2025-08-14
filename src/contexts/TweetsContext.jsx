import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { fetchTweets, createTweet } from "../lib/tweetsApi";

// Hard-coded username for now
const CURRENT_USER = "Lior";

function tweetsReducer(state, action) {
  switch (action.type) {
    case "LOAD_TWEETS":
      // Sort tweets by date in descending order (newest first)
      return action.payload.sort((a, b) => new Date(b.date) - new Date(a.date));
    case "ADD_TWEET":
      return [action.payload, ...state];
    default:
      return state;
  }
}

const TweetsContext = createContext();

export function TweetsProvider({ children }) {
  const [tweets, dispatch] = useReducer(tweetsReducer, []);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);

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

  const addTweetToServer = async (content) => {
    try {
      setIsCreating(true);
      const newTweet = {
        content: content,
        userName: CURRENT_USER,
        date: new Date().toISOString(),
      };
      const createdTweet = await createTweet(newTweet);
      // Supabase returns an array, get the first item
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
