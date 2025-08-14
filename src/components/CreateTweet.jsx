import { useState } from "react";

function CreateTweet() {
  const [tweetText, setTweetText] = useState("");

  const handleTweet = () => {
    if (tweetText.trim()) {
      console.log("New tweet:", tweetText);
      setTweetText(""); // Clear the input after tweeting
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
