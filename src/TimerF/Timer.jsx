import { useState } from "react";
let interval;
const Timer = () => {
  const [timer, setTimer] = useState();

  if (timer === 0) {
    clearInterval(interval);
  }
  const handleStartTimer = () => {
    interval = setInterval(() => {
      setTimer((prevValue) => prevValue - 1);
    }, 1000);
  };

  return (
    <div className="div">
      <input
        placeholder="add Time"
        className="inpt"
        type="number"
        onChange={(e) => setTimer(e.target.value)}
      />{" "}
      <button className="btn" onClick={handleStartTimer}>
        Start
      </button>
      {timer > 0 && <div className="timerdiv">{timer}</div>}
    </div>
  );
};
export default Timer;
