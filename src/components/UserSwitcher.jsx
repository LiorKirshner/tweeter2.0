import { useState } from "react";
import { useProfile } from "../contexts/ProfileContext";

function UserSwitcher() {
  const { currentUser, changeUser, availableUsers } = useProfile();
  const [newUserName, setNewUserName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUserName.trim()) {
      changeUser(newUserName);
      setNewUserName("");
      setIsOpen(false);
    }
  };

  const handleSuggestedUser = (suggestedUser) => {
    changeUser(suggestedUser);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Current User Display */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">
            {currentUser.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="text-sm font-medium">{currentUser}</span>
        <span className="text-xs">▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">
            Change User
          </h3>

          {/* Custom User Name Input */}
          <form onSubmit={handleSubmit} className="mb-4">
            <input
              type="text"
              placeholder="Enter any username..."
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={!newUserName.trim()}
              className="w-full mt-2 px-3 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Switch User
            </button>
          </form>

          {/* Suggested Users */}
          <div className="border-t border-gray-200 pt-3">
            <p className="text-xs text-gray-500 mb-2">Quick suggestions:</p>
            <div className="space-y-1">
              {availableUsers.map((user) => (
                <button
                  key={user}
                  onClick={() => handleSuggestedUser(user)}
                  className={`w-full text-left px-2 py-1 rounded text-sm transition-colors ${
                    user === currentUser
                      ? "bg-blue-100 text-blue-700"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {user}
                </button>
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full mt-3 px-3 py-1 text-xs text-gray-500 hover:text-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSwitcher;
