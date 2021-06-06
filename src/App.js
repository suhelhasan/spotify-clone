import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login/Login";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player/Player";
import { useDataLayerValue } from "./Context/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    let playlists = localStorage.getItem("playlists");

    if (token && user && playlists) {
      spotify.setAccessToken(token);

      dispatch({
        type: "SET_TOKEN",
        token: token,
      });
      dispatch({
        type: "SET_USER",
        user: JSON.parse(user),
      });
      dispatch({
        type: "SET_PLAYLISTS",
        playlists: JSON.parse(playlists),
      });
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      localStorage.setItem("token", _token);
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        localStorage.setItem("user", JSON.stringify(user));

        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        localStorage.setItem("playlists", JSON.stringify(playlists));
        console.log("PLAYLIST", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
