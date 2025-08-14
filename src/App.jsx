import "./App.css";
import Homepage from "./pages/HomePage";
import { TweetsProvider } from "./contexts/TweetsContext";

function App() {
  return (
    <TweetsProvider>
      <div className="bg-red-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Tweeter 2.0 app - Tailwind Test!</h1>
      </div>
      <Homepage />
    </TweetsProvider>
  );
}

export default App;
