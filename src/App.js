import React from "react";
import Input from "./components/input.js";
import Output from "./components/output.js";
import './input.css';

function App() {

  return (
    <div class="bg-slate-700 h-fit p-10 mt-32">
      <Input />
      <Output />
    </div>
  );
}

export default App;