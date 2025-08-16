import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import { TweetsProvider } from "./contexts/TweetsContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ProfileProvider>
        <TweetsProvider>
          <Router basename={"/tweeter2.0"}>
            <div className="min-h-screen bg-gray-100 text-gray-900">
              <NavBar />
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </div>
          </Router>
        </TweetsProvider>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
