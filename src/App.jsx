import "./App.css";
import Homepage from "./pages/HomePage";
import { TweetsProvider } from "./contexts/TweetsContext";
import NavBar from "./components/NavBar";
function App() {
  return (
    <TweetsProvider>
      <NavBar />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <Homepage />
      </div>
    </TweetsProvider>
  );
}

export default App;
