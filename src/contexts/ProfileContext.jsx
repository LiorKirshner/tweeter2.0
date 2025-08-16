import { createContext, useContext, useState, useEffect } from "react";
import { USER_CONFIG } from "../config/constants";

const ProfileContext = createContext();

export function ProfileProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(USER_CONFIG.DEFAULT_USER);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("tweeter_current_user");
    if (savedUser) {
      setCurrentUser(savedUser);
    }
  }, []);

  // Save user to localStorage when changed
  useEffect(() => {
    localStorage.setItem("tweeter_current_user", currentUser);
  }, [currentUser]);

  const changeUser = (newUser) => {
    // Allow any user name (no restrictions)
    if (newUser && newUser.trim()) {
      setCurrentUser(newUser.trim());
    } else {
      console.warn("User name cannot be empty");
    }
  };

  const value = {
    currentUser,
    changeUser,
    availableUsers: USER_CONFIG.AVAILABLE_USERS, // Optional suggestions
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}
