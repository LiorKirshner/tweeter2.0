import "./App.css";
import Homepage from "./pages/HomePage";
import { TweetsProvider } from "./contexts/TweetsContext";

function App() {
  return (
    <TweetsProvider>
      <h1>Tweeter 2.0 app</h1>
      <Homepage />
    </TweetsProvider>
  );
}

export default App;
