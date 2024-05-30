import { DownloadIcon, Share2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

import AudioBack from "@/assets/audioback.png";
import AudioForward from "@/assets/audioforward.png";

export default function AudioPlayer() {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    if (audioPlayer.current) {
      const seconds = Math.floor(audioPlayer.current.duration);
      if (!isNaN(seconds)) {
        setDuration(seconds);
        progressBar.current.max = seconds;
      }
    }
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    if (progressBar.current && audioPlayer.current) {
      progressBar.current.value = audioPlayer.current.currentTime;
      changePlayerCurrentTime();
      animationRef.current = requestAnimationFrame(whilePlaying);
    }
  };

  const changeRange = () => {
    if (audioPlayer.current && progressBar.current) {
      audioPlayer.current.currentTime = progressBar.current.value;
      changePlayerCurrentTime();
    }
  };

  const changePlayerCurrentTime = () => {
    if (progressBar.current) {
      progressBar.current.style.setProperty(
        "--seek-before-width",
        `${(progressBar.current.value / duration) * 100}%`,
      );
      setCurrentTime(progressBar.current.value);
    }
  };

  const backTen = () => {
    if (progressBar.current) {
      progressBar.current.value = Math.max(
        0,
        Number(progressBar.current.value - 10),
      );
      changeRange();
    }
  };

  const forwardTen = () => {
    if (progressBar.current) {
      progressBar.current.value = Math.min(
        duration,
        Number(progressBar.current.value + 10),
      );
      changeRange();
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:space-x-4 lg:space-y-4">
      <div className="flex flex-col lg:mt-8">
        <div className="w-full">
          {/* progress bar */}
          <audio
            ref={audioPlayer}
            src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
            preload="metadata"
          ></audio>
          <input
            type="range"
            className="player progressBar bg-[#B6B6B6]"
            defaultValue="0"
            ref={progressBar}
            onChange={changeRange}
          />
        </div>

        <div className="flex w-full justify-between font-avenirRegular text-[12px] font-medium text-[#989898]">
          <div className="">{calculateTime(currentTime)}</div>
          <div>
            {duration && !isNaN(duration) ? calculateTime(duration) : "00:00"}
          </div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between lg:mt-0 lg:space-x-4">
        <div className="flex items-center space-x-4 lg:hidden">
          <DownloadIcon className="h-[24px] w-[24px] text-[#646464]" />
          <Share2 className="h-[20px] w-[20px] text-[#646464]" />
        </div>
        <div className="flex space-x-2">
          <button className="w-[32px] lg:w-[40px]" onClick={backTen}>
            <img src={AudioBack} alt="Back 10 seconds" />
          </button>
          <button
            onClick={togglePlayPause}
            className="rounded-full bg-[#F4F4F4] p-[10px] lg:p-[20px]"
          >
            {isPlaying ? (
              <FaPause className="text-[#1F3E7C]" />
            ) : (
              <FaPlay className="text-[#1F3E7C]" />
            )}
          </button>
          <button className="w-[32px] lg:w-[40px]" onClick={forwardTen}>
            <img src={AudioForward} alt="Forward 10 seconds" />
          </button>
        </div>
      </div>
    </div>
  );
}
