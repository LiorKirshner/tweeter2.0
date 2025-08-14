import { useState } from "react";
import { useTweets } from "../contexts/TweetsContext";

function CreateTweet() {
  const [tweetText, setTweetText] = useState("");
  const { addTweet } = useTweets();

  const handleTweet = () => {
    if (tweetText.trim()) {
      addTweet(tweetText);
      setTweetText("");
    }
  };

  return (
    <div>
      <h3>Create Tweet</h3>
      <textarea
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
        placeholder="What's happening?"
        rows={3}
        style={{ width: "100%", resize: "vertical" }}
      />
      <button onClick={handleTweet} disabled={!tweetText.trim()}>
        Tweet
      </button>
    </div>
  );
}

export default CreateTweet;
