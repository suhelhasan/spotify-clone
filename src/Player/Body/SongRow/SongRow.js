import React, { useState } from "react";
import styling from "./SongRow.module.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import song from "../../../assets/song.mp3";
import { useDataLayerValue } from "../../../Context/DataLayer";
import ReactAudioPlayer from "react-audio-player";

export default function SongRow({ track }) {
  const [{ playlists, discover_weekly }, dispatch] = useDataLayerValue();

  let [playSong, setPlaySong] = useState(false);
  // if (track) {
  //   console.log("NO NO NO", track);
  // }
  // if (playSong) {
  //   dispatch({
  //     type: "CURRENT_SONG",
  //     current_song: track.preview_url,
  //   });
  //   console.log("FINALLY", track.preview_url);
  // }
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
