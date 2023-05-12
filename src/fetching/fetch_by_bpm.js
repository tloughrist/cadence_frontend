export default async function fetchByBPM(low, high) {

  const res = await fetch(`https://cadence-h597.onrender.com/tracks/bpm/${low}/${high}`);
  if (res.status === 204) {
    return "no content";
  } else {
    const tracks = await res.json();
    return tracks;
  }

};