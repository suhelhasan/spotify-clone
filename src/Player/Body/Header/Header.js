import React from "react";
import styling from "./Header.module.css";
// import SearchIcon from "@material-ui/icons/Search";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { useDataLayerValue } from "../../../Context/DataLayer";

export default function Header() {
  const [{ user }, dispatch] = useDataLayerValue();
  // BsFillCaretDownFill,
  function removeLocalData() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("playlists");

    dispatch({
      type: "SET_TOKEN",
      token: "",
    });
    dispatch({
      type: "SET_USER",
      user: {},
    });
    dispatch({
      type: "SET_PLAYLISTS",
      playlists: {},
    });
  }
  function suffleMenu() {
    dispatch({
      type: "SUFFLE_MENU",
      suffle: true,
    });
  }
  return (
    <div className={styling.Header}>
      <div className={styling.HeaderLeft}>
        <div className={styling.bars} onClick={suffleMenu}>
          <GiHamburgerMenu />
        </div>
        <div className={styling.moveLeft}>
          <BsChevronLeft />
        </div>
        <div className={styling.moveRight}>
          <BsChevronRight />
        </div>
      </div>
      <div
        title="LOGOUT USER"
        className={styling.HeaderRight}
        onClick={removeLocalData}
      >
        <Avatar
          src={user?.images[0]?.url}
          alt={user?.display_name}
          className={styling.userAvatar}
        />
        <p className={styling.userName}>{user?.display_name}</p>
        <ExitToAppIcon className={styling.userDownArrow} />
      </div>
    </div>
  );
}
