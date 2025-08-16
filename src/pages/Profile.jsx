import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOut } from "../lib/supabase";

function Profile() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate("/login");
  };

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">User Profile</h1>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email:
          </label>
          <p className="text-lg font-semibold text-gray-900">
            {user?.email || "No email"}
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password:
          </label>
          <p className="text-lg font-mono text-gray-600">••••••••</p>
          <p className="text-xs text-gray-500 mt-1">
            Password is hidden for security
          </p>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            User ID:
          </label>
          <p className="text-sm font-mono text-gray-600 break-all">
            {user?.id || "No ID"}
          </p>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <button
          onClick={handleGoHome}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          Back to Home
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors font-medium"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
