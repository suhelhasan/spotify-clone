import React from "react";
import styling from "./Footer.module.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from "../../Context/DataLayer";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import UseAudio from "./audio";
export default function Footer() {
  const [{ current_song }] = useDataLayerValue();
  const [playing, toggle] = UseAudio(current_song?.URL);

  if (!current_song) {
    return null;
  }

  return (
    <div className={styling.Footer}>
      <div className={styling.FooterLeft}>
        <img className={styling.albumLogo} src={current_song?.image} alt="" />
        <div className={styling.footerSonginfo}>
          <h4>{current_song?.name}</h4>
          <p>{current_song?.artist}</p>
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
