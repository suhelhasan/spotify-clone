import React from "react";
import styling from "./SongRow.module.css";
import { useDataLayerValue } from "../../../Context/DataLayer";

export default function SongRow({ track, sequence }) {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useDataLayerValue();

  let playSong = () => {
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
    <div className={styling.SongRow} onClick={playSong}>
      <div>
        <p className={styling.sequenceNum}>{`${sequence}  `}</p>
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
      <div className={styling.timing}></div>
    </div>
  );
}
