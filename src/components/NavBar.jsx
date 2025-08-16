function NavBar() {
  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-600">Tweeter 2.0</div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm"></span>
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">L</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
