export default async function fetchTracks(token, artist, album, song) {

  const res = await fetch(`https://api.spotify.com/v1/search?q=track%3A${song}+album%3A${album}+artist%3A${artist}&type=track`, {
    method: "GET",
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await res.json();
  return data.tracks.items;
};