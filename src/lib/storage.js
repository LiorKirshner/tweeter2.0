// Local storage utilities for tweets
const STORAGE_KEY = "tweets";

export const loadTweetsFromStorage = () => {
  try {
    const savedTweets = localStorage.getItem(STORAGE_KEY);
    return savedTweets ? JSON.parse(savedTweets) : [];
  } catch (error) {
    console.error("Error loading tweets from localStorage:", error);
    return [];
  }
};

export const saveTweetsToStorage = (tweets) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tweets));
  } catch (error) {
    console.error("Error saving tweets to localStorage:", error);
  }
};

export const clearTweetsFromStorage = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Error clearing tweets from localStorage:", error);
  }
};
