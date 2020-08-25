import React from "react";
import styling from "./SongRow.module.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import ReactAudioPlayer from "react-audio-player";
import song from "../../../assets/song.mp3";
import { useDataLayerValue } from "../../../Context/DataLayer";

export default function SongRow({ track }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  console.log("Track::::", track);
  // console.log("Song", track.album.href);
  // let time = track.duration_ms / 100;

  // useEffect(() => {
  //   // let id = playlists?.items?.[index]?.id;
  //   if (playlists) {
  //     spotify.getTrack;
  //     spotify.getPlaylist(id).then((response) => {
  //       dispatch({
  //         type: "SET_DISCOVER_WEEKLY",
  //         discover_weekly: response,
  //       });
  //     });
  //   }
  // }, [playlists, index]);

  return (
    <div className={styling.SongRow}>
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
        <PlayCircleFilledIcon />
        <ReactAudioPlayer src={track.uri} controls />
      </div>
      {/* <audio src={track.href}></audio> */}
    </div>
  );
}
