import React, { useEffect, useState } from "react";
import styling from "./Sidebar.module.css";
import logo from "../../assets/spotify-icon.png";
import SideOptions from "./SideOptions/SideOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../Context/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
export default function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let id = playlists?.items?.[index]?.id;
    if (playlists) {
      spotify.getPlaylist(id).then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [playlists, index, dispatch]);

  return (
    <div className={styling.Sidebar}>
      <img className={styling.logo} src={logo} alt="logo" />
      <SideOptions title="Home" Icon={HomeIcon} />
      <SideOptions title="Search" Icon={SearchIcon} />
      <SideOptions title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <b className={styling.sidebarTitle}>PLAYLIST</b>
      <hr />
      {playlists?.items?.map((playlist, i) => (
        <SideOptions
          title={playlist.name}
          setIndex={setIndex}
          currentIndex={i}
        />
      ))}
    </div>
  );
}
