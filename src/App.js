import React, { useState } from "react";
import "./App.css";
import Outer from "./components/Outer";
import Article from "./components/Article";


const nameInit = ["Archana", "Pushpa", "Deepthi", "peter", "john","Hemil"];

function App() {
  const [names, setNames] = useState(nameInit);
  return (
    <div className="App">
      {names.map(name => (
          <Article key={name} name={name} />
         ))}
    </div>
  );
}

export default App;
