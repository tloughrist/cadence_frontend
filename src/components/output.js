import React from "react";
import '../input.css';
import Tracks from './tracks.js';

function Output({ token, tracks }) {

  return (
    <div className="p-6 max-w-sm mx-auto mt-10 mb-1 bg-white rounded-xl shadow-lg shadow-black flex items-center space-x-4">
      <p className="text-xl font-medium text-black w-20">Results</p>
      <div className="flex-col">
        {
          (tracks.length > 0) && (tracks !== "no content") ?
          tracks.map((track) =>
            <Tracks
              key={`${track.id}`}
              token={token}
              info={track}
            />
          )
          :<p className="text-l font-light text-black">No tracks</p>
        }
      </div>
    </div>
  );
  
}

export default Output;