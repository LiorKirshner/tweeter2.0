import "./App.css";
import Homepage from "./pages/HomePage";
import { TweetsProvider } from "./contexts/TweetsContext";
import { ProfileProvider } from "./contexts/ProfileContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ProfileProvider>
      <TweetsProvider>
        <NavBar />
        <div className="min-h-screen bg-gray-100 text-gray-900">
          <Homepage />
        </div>
      </TweetsProvider>
    </ProfileProvider>
  );
}

export default App;
