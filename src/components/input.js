import React, { useState } from "react";
import '../input.css';
import fetchToken from "../fetching/fetch_token.js";
import fetchTracks from "../fetching/fetch_tracks.js";
import fetchByBPM from "../fetching/fetch_by_bpm.js";

function Input({ setToken, setTracks }) {

  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [song, setSong] = useState("");
  const [bpmLow, setBpmLow] = useState("");
  const [bpmHigh, setBpmHigh] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res1 = await fetchToken();
    setToken(res1.access_token);
    const res2 = await getTracks(res1.access_token);
    setTracks(res2);
  };

  function handleClear(e) {
    e.preventDefault();
    setArtist("");
    setAlbum("");
    setSong("");
    setBpmLow("");
    setBpmHigh("");
  };

  async function getTracks(tok) {
    let art = "";
    let alb = "";
    let son = "";
    artist.length > 0 ? art = artist : art = "*";
    album.length > 0 ? alb = album : alb = "*";
    song.length > 0 ? son = song : son = "*";
    if (bpmLow.length == 0 || bpmHigh.length == 0) {
      const res = await fetchTracks(tok, art, alb, son);
      return res;
    } else {
      const res = await fetchByBPM(bpmLow, bpmHigh);
      return res;
    }
  };

  return (
    <div class="p-6 max-w-sm mx-auto mt-1 bg-white rounded-xl shadow-lg shadow-black flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black w-20">Search</div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist" class="text-l font-light text-black flex flex-col my-2">
          Artist
          <input
            type="text"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="album" class="text-l font-light text-black flex flex-col my-2">
          Album
          <input
            type="text"
            name="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="song" class="text-l font-light text-black flex flex-col my-2">
          Song
          <input
            type="text"
            name="song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <p>or</p>
        <label htmlFor="bpmlow" class="text-l font-light text-black flex flex-col my-2">
          Min BPM
          <input
            type="text"
            name="bpmlow"
            value={bpmLow}
            onChange={(e) => setBpmLow(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="bpmhigh" class="text-l font-light text-black flex flex-col my-2">
          Max BPM
          <input
            type="text"
            name="bpmHigh"
            value={bpmHigh}
            onChange={(e) => setBpmHigh(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <button
          type="submit"
          class="text-l font-light text-white bg-slate-700 mt-2 px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
        >
          Find Tracks
        </button>
        <button
          onClick={handleClear}
          class="text-l font-light text-white bg-slate-700 mt-2 ml-6 px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
        >
          Clear Form
        </button>
      </form>
    </div>
  );
}

export default Input;