import { useState } from "react";
import { useTweets } from "../contexts/TweetsContext";
import { useAuth } from "../contexts/AuthContext";

function CreateTweet() {
  const [tweetText, setTweetText] = useState("");
  const { addTweet, isCreating } = useTweets();
  const { user } = useAuth();

  const handleTweet = () => {
    // Prevent multiple submissions
    if (isCreating) return;

    if (tweetText.trim() && tweetText.length <= 140) {
      addTweet(tweetText);
      setTweetText("");
    }
  };

  const handleKeyDown = (e) => {
    // Handle Ctrl+Enter or Cmd+Enter to submit
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      e.preventDefault();
      handleTweet();
    }
  };

  const charactersLeft = 140 - tweetText.length;
  const isOverLimit = charactersLeft < 0;

  return (
    <div className="p-6 border-b border-gray-200 bg-white rounded-t-2xl">
      <div className="flex space-x-3">
        {/* Tweet compose area */}
        <div className="flex-1">
          <textarea
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="What you have in mind..."
            rows={4}
            disabled={isCreating}
            className="w-full bg-gray-100 text-gray-900 text-lg placeholder-gray-400 border border-gray-300 rounded-lg p-4 resize-none focus:outline-none focus:border-blue-400 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
          />

          {/* Bottom section */}
          <div className="flex justify-end items-center mt-4">
            <button
              onClick={handleTweet}
              disabled={
                !tweetText.trim() || tweetText.length > 140 || isCreating
              }
              className="px-8 py-2 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center space-x-2"
            >
              {isCreating && (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              )}
              <span>{isCreating ? "Posting..." : "Tweet"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTweet;
