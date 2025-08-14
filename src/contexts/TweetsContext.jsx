import { createContext, useContext, useReducer } from "react";

function tweetsReducer(state, action) {
  switch (action.type) {
    case "ADD_TWEET":
      const newTweet = {
        id: Date.now().toString(),
        text: action.payload.text,
        author: action.payload.author || "Anonymous",
        timestamp: new Date().toISOString(),
      };
      return [newTweet, ...state];

    default:
      return state;
  }
}

const TweetsContext = createContext();

export function TweetsProvider({ children }) {
  const [tweets, dispatch] = useReducer(tweetsReducer, []);

  const value = {
    tweets,
    addTweet: (text, author) =>
      dispatch({
        type: "ADD_TWEET",
        payload: { text, author },
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
