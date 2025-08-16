import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Login from "./pages/Login";
import { TweetsProvider } from "./contexts/TweetsContext";
import NavBar from "./components/NavBar";
import Profile from "./pages/Profile";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <TweetsProvider>
        <Router basename={"/tweeter2.0"}>
          <div className="min-h-screen bg-gray-100 text-gray-900">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Homepage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </Router>
      </TweetsProvider>
    </AuthProvider>
  );
}

export default App;
