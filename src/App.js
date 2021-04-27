import { Home, Wallet } from "./components/icon";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Home  size="200" color="red"/>
          <Wallet  size="200" color="blue"/>
        </div>
      </header>
    </div>
  );
}

export default App;
