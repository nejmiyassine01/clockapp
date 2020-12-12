import Clock from "./components/Clock/Clock";
import Quotes from "./components/Quotes/Quotes";
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <Quotes/>
        <Clock/>
      </div>
    </div>
  );
}

export default App;