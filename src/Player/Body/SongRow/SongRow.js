import React from "react";
import styling from "./SongRow.module.css";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useDataLayerValue } from "../../../Context/DataLayer";

export default function SongRow({ track }) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useDataLayerValue();

  let hello = () => {
    dispatch({
      type: "CURRENT_SONG",
      current_song: {
        URL: track.preview_url,
        image: track.album.images[0].url,
        name: track.name,
        artist: track.artists.map((artist) => artist.name).join(", "),
        album: track.album.name,
      },
    });
  };
  return (
    <div className={styling.SongRow} onClick={hello}>
      <div>
        <img
          className={styling.songImage}
          src={track.album.images[0].url}
          alt=""
        />
        <div className={styling.songInfo}>
          <h1>{track.name}</h1>
          <p>
            {track.artists.map((artist) => artist.name).join(", ")} -{" "}
            {track.album.name}
          </p>
        </div>
      </div>
      <div className={styling.timing}>
        {/* <PlayCircleFilledIcon onClick={hello} /> */}
        {/* <ReactAudioPlayer src={track.preview_url} controls /> */}
      </div>
    </div>
  );
}
