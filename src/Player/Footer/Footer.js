import React from "react";
import styling from "./Footer.module.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Slider } from "@material-ui/core";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { useDataLayerValue } from "../../Context/DataLayer";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import UseAudio from "./audio";

export default function Footer() {
  const [{ current_song }] = useDataLayerValue();
  const [
    count,
    duration,
    playing,
    toggle,
    volumeLevel,
    setVolumeLevel,
  ] = UseAudio(current_song?.URL);

  if (!current_song) {
    return null;
  }

  let handleChange = (event, newValue) => {
    setVolumeLevel(newValue);
  };
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
        <div className={styling.allButtons}>
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
        <div className={styling.lengthSliderDiv}>
          {count}
          <Slider
            className={styling.lengthSlider}
            disabled={true}
            value={count}
            step={count}
            max={duration}
            min={0}
          />
          {duration}
        </div>
      </div>
      <div className={styling.FooterRight}>
        <VolumeDownIcon className={styling.volumeButton} />
        <Slider
          value={volumeLevel}
          step={0.05}
          max={1}
          min={0}
          onChange={handleChange}
          aria-labelledby="continuous-slider"
          className={styling.slider}
        />
        <VolumeUpIcon className={styling.volumeButton} />
      </div>
    </div>
  );
}
