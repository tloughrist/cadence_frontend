import { client_id, secret } from "./credentials.js";

export default async function fetchToken() {

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${secret}`
  });
  const token = await res.json();
  return token;

};