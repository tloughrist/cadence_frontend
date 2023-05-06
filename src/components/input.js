import React, { useState } from "react";
import '../input.css';

function Input() {

  const [spm, setSPM] = useState(160);
  const [genre, setGenre] = useState("");

  return (
    <div class="p-6 max-w-sm mx-auto mt-32 bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div>
        <div class="text-xl font-medium text-black">Cadence</div>
      </div>
      <form>
        <label htmlFor="strides">
          strides per minute
          <input
            type="text"
            name="spm"
            value={spm}
            onChange={(e) => setSPM(e.target.value)}
          />
        </label>
        <label htmlFor="genre">
          genre of music
          <select
            name="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value={""}>Any</option>
            <option value={"rock"}>Rock</option>
            <option value={"edm"}>EDM</option>
            <option value={"hiphop"}>Hip Hop</option>
          </select>
        </label>
        <button type="submit">Find songs</button>
      </form>
    </div>
  );
}

export default Input;