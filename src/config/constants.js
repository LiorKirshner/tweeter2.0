// API Configuration
export const API_CONFIG = {
  BASE_URL: "https://uckmgdznnsnusvmyfvsb.supabase.co/rest/v1/Tweets",
  API_KEY:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVja21nZHpubnNudXN2bXlmdnNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODU5NjAsImV4cCI6MjA3MDA2MTk2MH0.D82S0DBivlsXCCAdpTRB3YqLqTOIP7MUj-p1R8Lj9Jo",
};

// User Configuration
export const USER_CONFIG = {
  DEFAULT_USER: "Lior",
  AVAILABLE_USERS: ["Lior", "Sarah", "Mike", "Jenny", "Alex", "Tom"],
};

// App Configuration
export const APP_CONFIG = {
  APP_NAME: "Tweeter 2.0",
  MAX_TWEET_LENGTH: 140,
  VERSION: "1.0.0",
};

// Export all as default for easy import
export default {
  API_CONFIG,
  USER_CONFIG,
  APP_CONFIG,
};
