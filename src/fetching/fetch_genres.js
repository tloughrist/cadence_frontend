export default async function fetchGenres(token) {
  const res = await fetch("https://accounts.spotify.com/api/recommendations/available-genre-seeds", {
    method: "Get",
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const genres = await res.json();
  console.log(genres);
  return genres;
};