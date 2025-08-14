import { useReducer, useState } from "react";
import "./HomePage.css";
import CreateTweet from "../components/CreateTweet";
import TweetsList from "../components/TweetsList";

function Homepage() {
  return (
    <>
      <h2>Home Page</h2>
      <div className="create-section">
        <CreateTweet />
      </div>
      <div className="tweets-section">
        <TweetsList />
      </div>
    </>
  );
}

export default Homepage;
