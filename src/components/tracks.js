import React, { useState, useEffect } from "react";
import '../input.css';
import fetchBPM from '../fetching/fetch_bpm.js';
import sendTrack from '../fetching/send_track.js';

function Tracks({ token, info }) {

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [length, setLength] = useState("");
  const [bpm, setBPM] = useState(0);

  useEffect(() => {
    normalizeData(info);
  }, [info]);

  useEffect(() => {
    if (Object.keys(info).length > 9 && bpm > 0) {
      sendTrack(info.name, info.artists[0].name, info.album.name, millisToMinutesAndSeconds(info.duration_ms), bpm);
    }
  }, [bpm]);

  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  };

  async function normalizeData(info) {
   if (Object.keys(info).length > 9) {
    const beats = await getBPM();
    setTitle(info.name);
    setArtist(info.artists[0].name);
    setAlbum(info.album.name);
    setLength(millisToMinutesAndSeconds(info.duration_ms));
    setBPM(beats);
   } else {
    setTitle(info.title);
    setArtist(info.artist);
    setAlbum(info.album);
    setLength(info.length);
    setBPM(info.bpm);
   }
  };

  async function getBPM() {
    const res = await fetchBPM(token, info);
    return res;
  };

  return (
    <div
      className="bg-slate-300 rounded-xl shadow-lg shadow-black p-3 my-4"
    >
      <p className="text-l font-light"><b>Artist:</b> {artist}</p>
      <p className="text-l font-light"><b>Album:</b> {album}</p>
      <p className="text-l font-light"><b>Song:</b> {title}</p>
      <p className="text-l font-light"><b>Length:</b> {length}</p>
      <p className="text-l font-light"><b>BPM:</b> {bpm}</p>
    </div>
  );
  
};

export default Tracks;