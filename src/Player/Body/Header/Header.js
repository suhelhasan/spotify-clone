import React from "react";
import styling from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../../../Context/DataLayer";

export default function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className={styling.Header}>
      <div className={styling.HeaderLeft}>
        <SearchIcon />
        <input placeholder="Search Attists, Songs, Podcasts" type="text" />
      </div>
      <div className={styling.HeaderRight}>
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}
