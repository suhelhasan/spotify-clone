import React, { useState, useEffect, useMemo } from "react";
import styling from "./Footer.module.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import ReactAudioPlayer from "react-audio-player";
import { useDataLayerValue } from "../../Context/DataLayer";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import { Howl } from "howler";
import UseAudio from "./audio";
export default function Footer() {
  const [{ current_song }, dispatch] = useDataLayerValue();

  if (!current_song) {
    return null;
  }
  // const UseAudio = (url) => {
  //   const [audio] = useState(new Audio(url));
  //   audio.volume = 0.1;
  //   const [playing, setPlaying] = useState(false);

  //   const toggle = () => setPlaying(!playing);

  //   useEffect(() => {
  //     playing ? audio.play() : audio.pause();
  //   }, [playing, audio]);

  //   useEffect(() => {
  //     audio.addEventListener("ended", () => setPlaying(false));
  //     return () => {
  //       audio.removeEventListener("ended", () => setPlaying(false));
  //     };
  //   }, [audio]);

  //   return [playing, toggle];
  // };

  // const UseAudio = (url) => {
  //   const [audio] = useState(new Audio(url));
  //   audio.volume = 0.1;
  //   const [playing, setPlaying] = useState(true);

  //   const toggle = () => setPlaying(!playing);

  //   useEffect(() => {
  //     playing ? audio.play() : audio.pause();
  //   }, [playing, audio]);

  //   useEffect(() => {
  //     audio.addEventListener("ended", () => setPlaying(false));
  //     return () => {
  //       audio.removeEventListener("ended", () => setPlaying(false));
  //     };
  //   }, [audio]);

  //   return [playing, toggle];
  // };
  const [playing, toggle] = UseAudio(current_song?.URL);

  return (
    <div className={styling.Footer}>
      <div className={styling.FooterLeft}>
        <img className={styling.albumLogo} src={current_song?.image} alt="" />
        <div className={styling.footerSonginfo}>
          <h4>{current_song?.name}</h4>
          <p>{`${current_song?.artist} -  ${current_song?.album}`}</p>
        </div>
      </div>

      <div className={styling.FooterCenter}>
        <ShuffleIcon className={styling.footerGreen} />
        <SkipPreviousIcon className={styling.footerIcon} />
        {playing ? (
          <PauseCircleOutlineIcon
            fontSize="large"
            className={styling.footerIcon}
            onClick={toggle}
          />
        ) : (
          <PlayCircleOutlineIcon
            fontSize="large"
            className={styling.footerIcon}
            onClick={toggle}
          />
        )}

        <SkipNextIcon className={styling.footerIcon} />
        <RepeatIcon className={styling.footerGreen} />
      </div>
      <div className={styling.FooterRight}>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider defaultValue={5} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
