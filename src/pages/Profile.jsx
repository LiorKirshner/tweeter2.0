import { useProfile } from "../contexts/ProfileContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Profile() {
  const { currentUser, changeUser } = useProfile();
  const [newUsername, setNewUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsername.trim()) {
      changeUser(newUsername.trim());
      navigate("/"); // חזרה לדף הבית
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Profile</h1>

      <div className="mb-4">
        <p className="text-gray-600">Current user:</p>
        <p className="text-xl font-semibold">
          {currentUser || "No user selected"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Change Username:
          </label>
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter new username"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Update Username
        </button>
      </form>
    </div>
  );
}

export default Profile;
