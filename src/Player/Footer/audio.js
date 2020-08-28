import { useState, useEffect } from "react";

const UseAudio = (url) => {
  const [audio, setAudio] = useState(new Audio());
  const [duration, setDuration] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(0.1);
  useEffect(() => {
    audio.pause();
    setPlaying(true);

    setAudio(new Audio(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  // useEffect(() => {
  //   setDuration(audio.duration);
  // }, [audio]);
  audio.volume = volumeLevel;

  const [playing, setPlaying] = useState(true);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [duration, playing, toggle, volumeLevel, setVolumeLevel];
};
export default UseAudio;
