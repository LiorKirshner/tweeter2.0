import Tweet from "./Tweet";
import { useTweets } from "../contexts/TweetsContext";

function TweetsList() {
  const { tweets, isLoading } = useTweets();

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-4 h-4 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
        <p className="text-gray-400 text-sm mt-2">Loading tweets...</p>
      </div>
    );
  }

  if (tweets.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 text-sm">
          No tweets yet. Write your first tweet above!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

export default TweetsList;
