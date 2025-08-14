import "./HomePage.css";
import CreateTweet from "../components/CreateTweet";
import TweetsList from "../components/TweetsList";
import { useTweets } from "../contexts/TweetsContext";

function Homepage() {
  const { tweets } = useTweets();

  return (
    <>
      <h2>Home Page</h2>
      <div className="create-section">
        <CreateTweet />
      </div>
      <div className="tweets-section">
        {tweets.length > 0 && <TweetsList />}
      </div>
    </>
  );
}

export default Homepage;
