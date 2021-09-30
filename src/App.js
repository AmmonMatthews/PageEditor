import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import NewCKEditor from "./components/NewCKEditor";
import TinyMCE from "./components/TinyMCE";

function App() {
  const [view, setView] = useState("home");

  return (
    <div className="App">
      <button name="ck" onClick={() => setView("ck")}>
        CK Editor
      </button>
      <button onClick={() => setView("tiny")}>TinyMCE</button>
      <button onclick={() => setView("home")}>Home</button>

      {view === "ck" && <NewCKEditor />}
      {view === "tiny" && <TinyMCE />}
    </div>
  );
}

export default App;
