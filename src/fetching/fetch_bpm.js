export default async function fetchBPM(token, trackInfo) {

  const res = await fetch(`https://api.spotify.com/v1/audio-features/${trackInfo.id}`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await res.json();
  return Math.floor(data.tempo);
};