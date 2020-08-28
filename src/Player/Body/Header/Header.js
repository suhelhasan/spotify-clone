import React from "react";
import styling from "./Header.module.css";
// import SearchIcon from "@material-ui/icons/Search";
import {
  BsChevronLeft,
  BsChevronRight,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../../Context/DataLayer";

export default function Header() {
  const [{ user }] = useDataLayerValue();

  return (
    <div className={styling.Header}>
      <div className={styling.HeaderLeft}>
        <div className={styling.moveLeft}>
          <BsChevronLeft />
        </div>
        <div className={styling.moveRight}>
          <BsChevronRight />
        </div>
      </div>
      <div className={styling.HeaderRight}>
        <Avatar
          src={user?.images[0]?.url}
          alt={user?.display_name}
          className={styling.userAvatar}
        />
        <p className={styling.userName}>{user?.display_name}</p>
        <BsFillCaretDownFill className={styling.userDownArrow} />
      </div>
    </div>
  );
}
