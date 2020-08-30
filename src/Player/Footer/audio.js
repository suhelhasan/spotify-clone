import { useState, useEffect } from "react";
import { useDataLayerValue } from "../../Context/DataLayer";

const UseAudio = (url) => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useDataLayerValue();

  const [audio, setAudio] = useState(new Audio());
  const [duration, setDuration] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(0.1);
  const [playing, setPlaying] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    audio.pause();
    setCount(0);
    setDuration(0);
    setAudio(new Audio(url));
    setPlaying(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  audio.volume = volumeLevel;
  const toggle = () => setPlaying(!playing);
  useEffect(() => {
    if (url) {
      dispatch({
        type: "CURRENT_SONG_STATUS",
        song_status: { playing, url, toggle },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, url]);

  useEffect(() => {
    if (duration > count && playing) {
      var timer = setTimeout(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      return () => {
        if (count === 1) {
          setCount((prev) => prev + 1);
        }
        clearTimeout(timer);
      };
    } else if (duration <= count) {
      setCount(0);
    }
  }, [count, duration, playing, url, audio]);

  useEffect(() => {
    audio.addEventListener("loadedmetadata", (e) => {
      setDuration(e.target.duration.toFixed(0));
    });
  }, [audio, url]);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [count, duration, playing, toggle, volumeLevel, setVolumeLevel];
};
export default UseAudio;
