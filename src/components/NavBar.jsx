import { Link } from "react-router-dom";
import { useProfile } from "../contexts/ProfileContext";

function NavBar() {
  const { currentUser } = useProfile();
  const userInitial = currentUser ? currentUser.charAt(0).toUpperCase() : "?";

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            Tweeter 2.0
          </Link>

          <Link
            to="/profile"
            className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg hover:bg-blue-600 transition-colors"
          >
            {userInitial}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
