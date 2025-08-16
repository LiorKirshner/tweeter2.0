import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import { TweetsProvider } from "./contexts/TweetsContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";

function App() {
  return (
    <ProfileProvider>
      <TweetsProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 text-gray-900">
            <NavBar />
            <Routes>
              <Route path="/" element={<Homepage />} />

              {<Route path="/profile" element={<Profile />} />}
            </Routes>
          </div>
        </Router>
      </TweetsProvider>
    </ProfileProvider>
  );
}

export default App;
