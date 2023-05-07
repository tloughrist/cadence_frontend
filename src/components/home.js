import React from "react";
import Input from "./input.js";
import Output from "./output.js";
import '../input.css';

function Home() {

  return (
    <div class="bg-slate-700 h-fit p-10 mt-32">
      <Input />
      <Output />
    </div>
  );
}

export default Home;