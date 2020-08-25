import React from "react";
import styling from "./Body.module.css";
import Header from "./Header/Header";
import { useDataLayerValue } from "../../Context/DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow/SongRow";

export default function Body({ spotify }) {
  let [{ discover_weekly }, dispatch] = useDataLayerValue();

  return (
    <div className={styling.Body}>
      <Header spotify={spotify} />
      <div className={styling.BodyInfo}>
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className={styling.infoText}>
          <b>PLAYLIST</b>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className={styling.bodySongs}>
        <div className={styling.bodyIcons}>
          <PlayCircleFilledIcon className={styling.body_shuffle} />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}
