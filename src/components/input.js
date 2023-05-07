import React, { useState } from "react";
import '../input.css';
import fetchToken from "../fetching/fetch_token.js";
import fetchTracks from "../fetching/fetch_tracks.js";

function Input() {

  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [song, setSong] = useState("");
  const [token, setToken] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const res1 = await fetchToken();
    console.log(res1);
    setToken(res1.access_token);
    const res2 = await getTracks(res1.access_token);
    console.log(res2);
  };

  function getTracks(tok) {
    let art = "";
    let alb = "";
    let son = "";
    artist.length > 0 ? art = artist : art = "*";
    album.length > 0 ? alb = album : alb = "*";
    song.length > 0 ? son = song : son = "*";
    fetchTracks(tok, art, alb, son);
  }

  return (
    <div class="p-6 max-w-sm mx-auto mt-1 bg-white rounded-xl shadow-lg shadow-black flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black w-20">Search</div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="strides" class="text-l font-light text-black flex flex-col my-2">
          Artist
          <input
            type="text"
            name="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="strides" class="text-l font-light text-black flex flex-col my-2">
          Album
          <input
            type="text"
            name="album"
            value={album}
            onChange={(e) => setAlbum(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="strides" class="text-l font-light text-black flex flex-col my-2">
          Song
          <input
            type="text"
            name="song"
            value={song}
            onChange={(e) => setSong(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <button
          type="submit"
          class="text-l font-light text-white bg-slate-700 mt-2 px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
        >
          Find Tracks
        </button>
      </form>
    </div>
  );
}

export default Input;