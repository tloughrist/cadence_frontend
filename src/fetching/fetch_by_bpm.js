export default async function fetchByBPM(low, high) {
  const res = await fetch(`tracks/bpm/${low}/${high}`);
  if (res.statusText === "No Content") {
    return "error";
  } else {
    const tracks = await res.json();
    return tracks;
  }
};