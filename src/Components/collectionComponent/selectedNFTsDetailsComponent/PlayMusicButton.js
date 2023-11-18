import React, { useState } from "react";

const PlayMusicButton = ({ selectedCollection }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div className="mt-5">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-1 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
        {isPlaying && (
          <audio
            controls
            autoPlay
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            <source src={selectedCollection.music} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </>
  );
};

export default PlayMusicButton;
