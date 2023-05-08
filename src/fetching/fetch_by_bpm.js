export default async function fetchByBPM(low, high) {
  const res = await fetch(`tracks/bpm/${low}/${high}`);
  const tracks = await res.json();
  return tracks;
};