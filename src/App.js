import React, { useState } from "react";
import Input from "./components/input.js";
import './input.css';

function App() {

  const [spm, setSPM] = useState(160);
  const [genre, setGenre] = useState("");

  return (
    <div>
      <Input />
    </div>
  );
}

export default App;