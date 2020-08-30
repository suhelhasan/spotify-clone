import React from "react";
import styling from "./Body.module.css";
import Header from "./Header/Header";
import { useDataLayerValue } from "../../Context/DataLayer";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow/SongRow";

export default function Body({ spotify }) {
  let [{ user_playlist, song_status }] = useDataLayerValue();

  return (
    <div className={styling.Body}>
      <Header spotify={spotify} />
      <div className={styling.BodyInfo}>
        <img src={user_playlist?.images[0].url} alt="" />
        <div className={styling.infoText}>
          <b>{user_playlist?.type.toUpperCase()}</b>
          <h2>{user_playlist?.name}</h2>
          <p>
            {user_playlist?.description
              ? user_playlist?.description
              : `${user_playlist?.owner?.display_name}'s playlist`}
          </p>
        </div>
      </div>
      <div className={styling.bodySongs}>
        <div className={styling.bodyIcons}>
          {song_status?.playing ? (
            <PauseIcon className={styling.body_shuffle} />
          ) : (
            <PlayArrowIcon className={styling.body_shuffle} />
          )}

          <MoreHorizIcon />
        </div>
        {user_playlist?.tracks.items.map((item, index) => (
          <SongRow track={item.track} sequence={index + 1} />
        ))}
      </div>
    </div>
  );
}
