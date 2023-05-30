import React, { useState, useEffect } from "react";
import "./../index.scss";

const CountdownTimer = () => {
  const [inputTime, setInputTime] = useState("");
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time]);

  const handleStart = (event) => {
    event.preventDefault();

    const parsedTime = parseInt(inputTime, 10);
    if (!isNaN(parsedTime) && parsedTime > 0) {
      setTime(parsedTime);
    }
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleStart(e);
    }
  };

  return (
    <div className="countdown">
      <h1>Countdown Timer</h1>
      <form className="countdown-form" onSubmit={handleStart}>
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          placeholder="Enter time in seconds"
          onKeyDown={handleEnter}
        />
        <button type="submit">Start Countdown</button>
      </form>

      {time > 0 && <p>{formatTime()}</p>}

      {time <= 0 && <p>Time has passed</p>}
    </div>
  );
};

export default CountdownTimer;
