import { useState } from "react";
import { useTweets } from "../contexts/TweetsContext";

function CreateTweet() {
  const [tweetText, setTweetText] = useState("");
  const { addTweet } = useTweets();

  const handleTweet = () => {
    if (tweetText.trim() && tweetText.length <= 140) {
      addTweet(tweetText);
      setTweetText("");
    }
  };

  const charactersLeft = 140 - tweetText.length;
  const isOverLimit = charactersLeft < 0;

  return (
    <div className="p-6 border-b border-gray-600">
      <div className="flex space-x-3">
        {/* Tweet compose area */}
        <div className="flex-1">
          <textarea
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            placeholder="What you have in mind..."
            rows={4}
            className="w-full bg-gray-700 text-white text-lg placeholder-gray-400 border border-gray-600 rounded-lg p-4 resize-none focus:outline-none focus:border-gray-500 focus:bg-gray-600"
          />

          {/* Bottom section */}
          <div className="flex justify-end items-center mt-4">
            <button
              onClick={handleTweet}
              disabled={!tweetText.trim() || tweetText.length > 140}
              className="px-8 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTweet;
