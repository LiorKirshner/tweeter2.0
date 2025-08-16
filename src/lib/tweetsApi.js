import { supabase } from "./supabase";

export async function fetchTweets() {
  const { data, error } = await supabase
    .from("tweets")
    .select("*")
    .order("date", { ascending: false });

  if (error) {
    throw new Error(`Failed to fetch tweets: ${error.message}`);
  }

  return data;
}

export async function createTweet(tweet) {
  const { data, error } = await supabase
    .from("tweets")
    .insert([tweet])
    .select();

  if (error) {
    throw new Error(`Failed to create tweet: ${error.message}`);
  }

  return data;
}
