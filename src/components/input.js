import React, { useState } from "react";
import swal from 'sweetalert';
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

  function displayHelp(e) {
    e.preventDefault();
    return swal("How to Use the App", `When you search by artist, album, or song, the app searches Spotify for the matching tracks and displays them below. These tracks are then added to the app's own database, so the more searches that are performed, the more complete the Cadence database will become. When you search by BPM (beats per minute), the app searches its own database for tracks that within that range. Searching by BPM takes precedence over searching by artist, album, or song, so if there are values in the min BPM and max BPM fields, it will attempt to find tracks that fall in that range in the Cadence database. Simply clear those fields if you want to search by artist, album, or song. Enjoy!`);
  };

  async function getTracks(token) {
    let art = "";
    let alb = "";
    let son = "";
    artist.length > 0 ? art = artist : art = "*";
    album.length > 0 ? alb = album : alb = "*";
    song.length > 0 ? son = song : son = "*";
    if (bpmLow.length === 0 || bpmHigh.length === 0) {
      const res = await fetchTracks(token, art, alb, son);
      return res;
    } else {
      const res = await fetchByBPM(bpmLow, bpmHigh);
      return res;
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto mt-1 bg-white rounded-xl shadow-lg shadow-black flex items-center space-x-4">
      <div>
        <div className="text-xl font-medium text-black w-20">Search</div>
        <button
          onClick={displayHelp}
          className="text-sm font-light text-white bg-slate-700 mt-2 px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
        >
          Help
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="artist" className="text-l font-light text-black flex flex-col my-2">
          Artist
          <input
            type="text"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            className="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="album" className="text-l font-light text-black flex flex-col my-2">
          Album
          <input
            type="text"
            name="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            className="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="song" className="text-l font-light text-black flex flex-col my-2">
          Song
          <input
            type="text"
            name="song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            className="bg-gray-300 px-1 rounded"
          />
        </label>
        <p>or</p>
        <label htmlFor="bpmlow" className="text-l font-light text-black flex flex-col my-2">
          Min BPM
          <input
            type="text"
            name="bpmlow"
            value={bpmLow}
            onChange={(e) => setBpmLow(e.target.value)}
            className="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="bpmhigh" className="text-l font-light text-black flex flex-col my-2">
          Max BPM
          <input
            type="text"
            name="bpmHigh"
            value={bpmHigh}
            onChange={(e) => setBpmHigh(e.target.value)}
            className="bg-gray-300 px-1 rounded"
          />
        </label>
        <button
          type="submit"
          className="text-l font-light text-white bg-slate-700 mt-2 px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
        >
          Find Tracks
        </button>
        <button
          onClick={handleClear}
          className="text-l font-light text-white bg-slate-700 mt-2 ml-6 px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
        >
          Clear Form
        </button>
      </form>
    </div>
  );

};

export default Input;