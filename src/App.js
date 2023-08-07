import "./App.css";
import ChristieWebLogo from "./ChristieWebLogo.PNG";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          {" "}
          <img
            src={ChristieWebLogo}
            className="App-logo"
            alt="logo"
            width={200}
            height={50}
          />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          {" "}
          <small>Coded by Christie Laferriere</small>{" "}
        </footer>
      </div>
    </div>
  );
}
