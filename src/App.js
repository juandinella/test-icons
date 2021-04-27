import { Home, Wallet } from "./components/icon";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Home width="200" height="200" color="red"/>
          <Wallet width="200" height="200" color="blue"/>
        </div>
      </header>
    </div>
  );
}

export default App;
