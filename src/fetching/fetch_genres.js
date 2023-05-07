export default async function fetchGenres(token) {
  const res = await fetch("https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb", {
    method: "Get",
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const genres = await res.json();
  return genres;
};