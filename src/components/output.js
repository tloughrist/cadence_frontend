import React, { useState } from "react";
import '../input.css';

function Output() {

  const [spm, setSPM] = useState(160);
  const [genre, setGenre] = useState("");

  return (
    <div class="p-6 max-w-sm mx-auto mt-10 mb-1 bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <p class="text-xl font-medium text-black">Songs</p>
    </div>
  );
}

export default Output;