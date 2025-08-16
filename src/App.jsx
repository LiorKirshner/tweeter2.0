import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import { TweetsProvider } from "./contexts/TweetsContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ProfileProvider>
      <TweetsProvider>
        <Router>
          <div className="min-h-screen bg-gray-100 text-gray-900">
            <NavBar />
            <Routes>
              <Route path="/" element={<Homepage />} />
              {/* Profile route will be added next */}
            </Routes>
          </div>
        </Router>
      </TweetsProvider>
    </ProfileProvider>
  );
}

export default App;
