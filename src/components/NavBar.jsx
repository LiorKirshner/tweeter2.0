import { Link } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContext";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "../lib/supabase";

function NavBar() {
  const { currentUser } = useProfile();
  const { user } = useAuth();
  const userInitial = currentUser ? currentUser.charAt(0).toUpperCase() : "?";

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to={user ? "/" : "/login"}
            className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Tweeter 2.0
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  to="/profile"
                  className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg hover:bg-blue-600 transition-colors"
                >
                  {userInitial}
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-red-600 transition-colors px-3 py-1 rounded-lg hover:bg-gray-100"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
