import "./App.css";
import Homepage from "./pages/HomePage";
import { TweetsProvider } from "./contexts/TweetsContext";

function App() {
  return (
    <TweetsProvider>
  <div className="min-h-screen bg-gray-100 text-gray-900">
        <Homepage />
      </div>
    </TweetsProvider>
  );
}

export default App;
