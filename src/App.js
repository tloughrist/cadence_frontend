import React, { useState } from "react";
import Input from "./components/input.js";
import Output from "./components/output.js";
import './input.css';

function App() {

  const [spm, setSPM] = useState(160);
  const [genre, setGenre] = useState("");

  return (
    <div class="bg-slate-700 h-fit p-1 mt-32">
      <Input />
      <Output />
    </div>
  );
}

export default App;