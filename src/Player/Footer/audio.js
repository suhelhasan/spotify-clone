import React, { useState, useEffect } from "react";

const UseAudio = (url) => {
  let [audio] = useState(new Audio(url));
  //   useEffect(() => {
  //     setAudio();
  //   }, [url]);
  //   audio.volume = 0.1;

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
