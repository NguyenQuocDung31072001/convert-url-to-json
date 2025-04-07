import { useState, useRef } from 'react';

const Mp3Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [timeInput, setTimeInput] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      const time = parseFloat(e.target.value);
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const speed = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
      setPlaybackRate(speed);
    }
  };

  const handleTimeInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeInput(e.target.value);
  };

  const handleTimeInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const seconds = parseFloat(timeInput);
    if (!isNaN(seconds) && audioRef.current) {
      audioRef.current.currentTime -= seconds;
      setCurrentTime(seconds);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && audioRef.current) {
      const url = URL.createObjectURL(file);
      audioRef.current.src = url;
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#282c34] p-8">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">MP3 Player</h1>

        <div className="mb-4">
          <input
            type="file"
            accept="audio/mp3"
            onChange={handleFileChange}
            className="w-full rounded border p-2"
          />
        </div>

        <div className="mb-4 flex items-center justify-center space-x-4">
          <button
            onClick={handlePlayPause}
            className="rounded-full bg-blue-500 p-4 text-white hover:bg-blue-600"
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>

          <select value={playbackRate} onChange={handleSpeedChange} className="rounded border p-2">
            <option value="0.5">0.5x</option>
            <option value="0.75">0.75x</option>
            <option value="0.9">0.9x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="1.5">1.5x</option>
            <option value="2">2x</option>
          </select>
        </div>

        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>{formatTime(currentTime)}</span>
          </div>
        </div>

        <form onSubmit={handleTimeInputSubmit} className="mt-4">
          <div className="flex space-x-2">
            <input
              type="number"
              value={timeInput}
              onChange={handleTimeInputChange}
              placeholder="Enter time in seconds"
              className="flex-1 rounded border p-2"
            />
            <button
              type="submit"
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Jump
            </button>
          </div>
        </form>

        <audio
          ref={audioRef}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleTimeUpdate}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default Mp3Player;
