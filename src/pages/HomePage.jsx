import CreateTweet from "../components/CreateTweet";
import TweetsList from "../components/TweetsList";
import { useTweets } from "../contexts/TweetsContext";

function Homepage() {
  const { tweets } = useTweets();

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center py-8">
      <div className="w-full max-w-lg bg-gray-800 rounded-lg shadow-lg">
        {/* Create Tweet Section */}
        <section>
          <CreateTweet />
        </section>

        {/* Tweets Feed Section */}
        <section className="p-4">
          <TweetsList />
        </section>
      </div>
    </div>
  );
}

export default Homepage;
