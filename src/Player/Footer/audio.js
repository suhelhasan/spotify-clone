import { useState, useEffect } from "react";

const UseAudio = (url) => {
  const [audio, setAudio] = useState(new Audio());
  useEffect(() => {
    audio.pause();
    setAudio(new Audio(url));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  audio.volume = 0.1;

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

  return [playing, toggle];
};
export default UseAudio;
