import React from "react";
import { useNavigate } from "react-router-dom";
import '../input.css';

function Error() {

  const navigate = useNavigate();

  function sendHome() {
    navigate("/");
  };

  return (
    <div class="bg-slate-700 h-fit p-10 mt-32">
      <div class="p-6 max-w-sm mx-auto mt-10 mb-1 bg-white rounded-xl shadow-lg shadow-black flex items-center">
        <p class="text-xl font-medium text-black w-20">Error Loading Songs</p>
        <button
          type="submit"
          class="text-l font-light text-white bg-slate-700 mt-2 mx-auto px-2 py-1 rounded hover:bg-gray-300 hover:text-black shadow-sm shadow-black"
          onClick={sendHome}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

export default Error;