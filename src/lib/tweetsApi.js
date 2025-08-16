import { API_CONFIG } from "../config/constants";

const API_URL = API_CONFIG.BASE_URL;
const API_KEY = API_CONFIG.API_KEY;

export async function fetchTweets() {
  const res = await fetch(API_URL, {
    headers: { apikey: API_KEY },
  });
  if (!res.ok) throw new Error("Failed to fetch tweets");
  return res.json();
}

export async function createTweet(tweet) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: API_KEY,
      Prefer: "return=representation",
    },
    body: JSON.stringify(tweet),
  });
  if (!res.ok) throw new Error("Failed to create tweet");
  return res.json();
}

export { API_URL, API_KEY };
