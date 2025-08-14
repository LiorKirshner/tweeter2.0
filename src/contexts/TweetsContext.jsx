import { createContext, useContext, useReducer, useEffect } from "react";
import { loadTweetsFromStorage, saveTweetsToStorage } from "../lib/storage";

// Hard-coded username for now
const CURRENT_USER = "LiorKirshner";

function tweetsReducer(state, action) {
  switch (action.type) {
    case "LOAD_TWEETS":
      // Sort tweets by timestamp in descending order (newest first)
      return action.payload.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
    case "ADD_TWEET":
      const newTweet = {
        id: Date.now().toString(),
        text: action.payload.text,
        author: CURRENT_USER,
        timestamp: new Date().toISOString(),
      };
      const newState = [newTweet, ...state];
      saveTweetsToStorage(newState);
      return newState;

    default:
      return state;
  }
}

const TweetsContext = createContext();

export function TweetsProvider({ children }) {
  const [tweets, dispatch] = useReducer(tweetsReducer, []);

  // Load tweets from localStorage on component mount
  useEffect(() => {
    const savedTweets = loadTweetsFromStorage();
    if (savedTweets.length > 0) {
      dispatch({ type: "LOAD_TWEETS", payload: savedTweets });
    }
  }, []);

  const value = {
    tweets,
    addTweet: (text) =>
      dispatch({
        type: "ADD_TWEET",
        payload: { text },
      }),
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
