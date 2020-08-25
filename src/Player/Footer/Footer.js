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

export default function Footer() {
  return (
    <div className={styling.Footer}>
      <div className={styling.FooterLeft}>
        <img className={styling.albumLogo} src="" alt="" />
        <div className={styling.footerSonginfo}>
          <h4>Yeah....</h4>
          <p>hello</p>
        </div>
      </div>
      <div className={styling.FooterCenter}>
        <ShuffleIcon className={styling.footerGreen} />
        <SkipPreviousIcon className={styling.footerIcon} />
        <PlayCircleOutlineIcon
          fontSize="large"
          className={styling.footerIcon}
        />
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
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
