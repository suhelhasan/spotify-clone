import React, { useEffect, useState } from "react";
import styling from "./Sidebar.module.css";
import logo from "../../assets/spotify-icon.png";
import SideOptions from "./SideOptions/SideOptions";
// import HomeIcon from "@material-ui/icons/Home";
// import SearchIcon from "@material-ui/icons/Search";
// import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../Context/DataLayer";
import SpotifyWebApi from "spotify-web-api-js";
import { VscHome, VscLibrary } from "react-icons/vsc";
import { ImCross } from "react-icons/im";
import { IoIosSearch } from "react-icons/io";
const spotify = new SpotifyWebApi();
export default function Sidebar() {
  const [{ playlists, suffle }, dispatch] = useDataLayerValue();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (playlists) {
      let id = playlists?.items?.[index]?.id;
      spotify.getPlaylist(id).then((response) => {
        dispatch({
          type: "SET_user_playlist",
          user_playlist: response,
        });
      });
    }
  }, [playlists, index, dispatch]);
  function suffleSidebar() {
    dispatch({
      type: "SUFFLE_MENU",
      suffle: false,
    });
  }

  return (
    <div className={styling.Sidebar}>
      <div
        onClick={suffleSidebar}
        className={suffle ? styling.showCross : styling.hideCross}
      >
        <ImCross />
      </div>
      <img className={styling.logo} src={logo} alt="logo" />
      <SideOptions title="Home" Icon={VscHome} />
      <SideOptions title="Search" Icon={IoIosSearch} />
      <SideOptions title="Your Library" Icon={VscLibrary} />
      <br />
      <b className={styling.sidebarTitle}>PLAYLISTS</b>
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
