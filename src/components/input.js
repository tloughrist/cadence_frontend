import React, { useState } from "react";
import '../input.css';

function Input() {

  const [spm, setSPM] = useState(160);
  const [genre, setGenre] = useState("");

  return (
    <div class="p-6 max-w-sm mx-auto mt-1 bg-white rounded-xl shadow-lg shadow-black flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black">Cadence</div>
      </div>
      <form>
        <label htmlFor="strides" class="text-l font-light text-black flex flex-col my-2">
          Strides per Minute
          <input
            type="text"
            name="spm"
            value={spm}
            onChange={(e) => setSPM(e.target.value)}
            class="bg-gray-300"
          />
        </label>
        <label htmlFor="genre" class="text-l font-light text-black flex flex-col my-2">
          Genre of Music
          <select
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            class="bg-gray-300"
          >
            <option value={""}>Any</option>
            <option value={"rock"}>Rock</option>
            <option value={"edm"}>EDM</option>
            <option value={"hiphop"}>Hip Hop</option>
          </select>
        </label>
        <button
          type="submit"
          class="text-l font-light text-white bg-slate-500 mt-2 p-2 rounded"
        >
          Find songs
        </button>
      </form>
    </div>
  );
}

export default Input;