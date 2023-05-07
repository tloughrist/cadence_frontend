import React, { useState } from "react";
import '../input.css';
import fetchToken from "../fetching/fetch_token.js";
import fetchGenres from "../fetching/fetch_genres.js";

function Input() {

  const [spm, setSPM] = useState(160);
  const [genre, setGenre] = useState("");
  const [token, setToken] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetchToken();
    console.log(res);
    setToken(res);
  };

  async function getGenres(e) {
    e.preventDefault();
    const res = await fetchGenres(token);
    console.log(res);
  };

  return (
    <div class="p-6 max-w-sm mx-auto mt-1 bg-white rounded-xl shadow-lg shadow-black flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black w-20">Cadence</div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="strides" class="text-l font-light text-black flex flex-col my-2">
          Strides per Minute
          <input
            type="text"
            name="spm"
            value={spm}
            onChange={(e) => setSPM(e.target.value)}
            class="bg-gray-300 px-1 rounded"
          />
        </label>
        <label htmlFor="genre" class="text-l font-light text-black flex flex-col my-2">
          Genre of Music
          <select
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            class="bg-gray-300 px-1 py-0.5 rounded"
          >
            <option value={""}>Any</option>
            <option value={"rock"}>Rock</option>
            <option value={"edm"}>EDM</option>
            <option value={"hiphop"}>Hip Hop</option>
          </select>
        </label>
        <button
          type="submit"
          class="text-l font-light text-white bg-slate-700 mt-2 px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
        >
          Find songs
        </button>
      </form>
      <button
        onClick={getGenres}
        class="text-l font-light text-white bg-slate-700 mt-2 px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
      >
        Find Genres
      </button>
    </div>
  );
}

export default Input;