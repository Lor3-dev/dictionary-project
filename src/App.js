import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header"></header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>This project was coded by Lorena Ibeas and is <a href="https://github.com/Lor3-dev/dictionary-project" target="_blank">open-sourced on GitHub</a></small>
      </footer>
      </div>
    </div>
  );
}

export default App;
