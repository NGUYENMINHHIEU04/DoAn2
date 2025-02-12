import React, { useState, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  const [currentTime, setCurrentTime] = useState(0); // Track current time of the song
  const [duration, setDuration] = useState(0); // Track total duration of the song
  const audioRef = useRef(null); // Reference to the audio element

  // Song URL (replace with your own URL)
  const songUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3";

  // Play/Pause toggle function
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update current time as the song plays
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Update duration when the song metadata is loaded
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Format time in minutes and seconds
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Handle seek bar change
  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Album Cover"
            className="w-12 h-12 rounded-md"
          />
          <div className="ml-4">
            <p className="font-bold">Song Title</p>
            <p className="text-sm text-gray-400">Artist Name</p>
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white">
            <FaBackward size={20} />
          </button>
          <button
            className="text-white bg-green-500 rounded-full p-3 hover:bg-green-600"
            onClick={togglePlayPause}
          >
            {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
          </button>
          <button className="text-gray-400 hover:text-white">
            <FaForward size={20} />
          </button>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">{formatTime(currentTime)}</span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-32"
          />
          <span className="text-sm text-gray-400">{formatTime(duration)}</span>
        </div>
      </div>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={songUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
};

export default MusicPlayer;