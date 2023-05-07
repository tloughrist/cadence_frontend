import React, { useState, useEffect } from "react";
import '../input.css';
import fetchBPM from '../fetching/fetch_bpm.js';

function Tracks({ token, info }) {

  const [bpm, setBPM] = useState("");

  useEffect(() => {
    async function getBPM() {
      const res = await fetchBPM(token, info);
      setBPM(res);
    }
    getBPM();
  }, [info]);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  };

  return (
    <div
      class="bg-slate-300 rounded-xl shadow-lg shadow-black p-3 my-4"
    >
      <p class="text-l font-light">Artist: {info.artists[0].name}</p>
      <p class="text-l font-light">Album: {info.album.name}</p>
      <p class="text-l font-light">Song: {info.name}</p>
      <p class="text-l font-light">Length: {millisToMinutesAndSeconds(info.duration_ms)}</p>
      <p class="text-l font-light">BPM: {bpm}</p>
    </div>
  );
};

export default Tracks;