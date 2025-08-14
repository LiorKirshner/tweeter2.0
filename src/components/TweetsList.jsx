import { useTweets } from "../contexts/TweetsContext";

function TweetsList() {
  const { tweets } = useTweets();

  return (
    <div>
      <h3>Tweets List</h3>
      {tweets.map((tweet) => (
        <div
          key={tweet.id}
          style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}
        >
          <p>{tweet.text}</p>
          <small>
            By: {tweet.author} | {new Date(tweet.timestamp).toLocaleString()}
          </small>
        </div>
      ))}
    </div>
  );
}

export default TweetsList;
