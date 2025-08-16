import { API_CONFIG } from "../config/constants";

const API_URL = "https://lasbvrtpvdhdjhueollx.supabase.co/rest/v1/tweets";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxhc2J2cnRwdmRoZGpodWVvbGx4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUzNTMwODAsImV4cCI6MjA3MDkyOTA4MH0.XSpSmboQ8Y_9FDLXUtjpc6UOceYMe2tpVanGTZiOGOE";

export async function fetchTweets() {
  const res = await fetch(API_URL, {
    headers: {
      apikey: API_KEY,
      Authorization: `Bearer ${API_KEY}`,
    },
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
      Authorization: `Bearer ${API_KEY}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(tweet),
  });
  if (!res.ok) throw new Error("Failed to create tweet");
  return res.json();
}

export { API_URL, API_KEY };
