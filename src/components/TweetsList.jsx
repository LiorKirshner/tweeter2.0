import Tweet from "./Tweet";
import { useTweets } from "../contexts/TweetsContext";

function TweetsList() {
  const { tweets } = useTweets();

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
