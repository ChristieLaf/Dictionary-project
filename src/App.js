import "./App.css";
import SheCodesPluslogo from "./SheCodesPluslogo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <img src={SheCodesPluslogo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          {" "}
          <small>Coded by Christie</small>{" "}
        </footer>
      </div>
    </div>
  );
}
