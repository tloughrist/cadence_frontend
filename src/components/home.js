import React, { useState } from "react";
import Input from "./input.js";
import Output from "./output.js";
import '../input.css';

function Home() {

  const [token, setToken] = useState();
  const [tracks, setTracks] = useState([]);

  return (
    <div class="bg-slate-700 h-fit p-10 mt-32">
      <Input setToken={setToken} setTracks={setTracks} />
      <Output token={token} tracks={tracks} />
    </div>
  );
}

export default Home;