export default function sendTrack(title, artist, album, length, bpm) {

  fetch(`/tracks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ 
      title: title,
      artist: artist,
      album: album,
      length: length,
      bpm: bpm
    })
  });

};