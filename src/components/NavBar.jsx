import UserSwitcher from "./UserSwitcher";

function NavBar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">Tweeter 2.0</div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm">Welcome back!</span>
            <UserSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
