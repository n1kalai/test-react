import React, { useState, useEffect } from 'react';

function Timer() {
  const [inputNumber, setInputNumber] = useState('');
  const [count, setCount] = useState(0);
  const [timerId, setTimerId] = useState(null); 

  const handleChange = (event) => {
    setInputNumber(event.target.value);
  };

  const startTimer = () => {
    setCount(parseInt(inputNumber, 10));
    setTimerId(setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(timerId);
          return prevCount;
        }
      });
    }, 1000));
  };

  const stopTimer = () => {
    clearInterval(timerId);
  };

  useEffect(() => {
    return () => {
      clearInterval(timerId);
    };
  }, [timerId]);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Timer App</h1>
      <div style={styles.timerContainer}>
        <input
          type="number"
          value={inputNumber}
          onChange={handleChange}
          style={styles.input}
        />
        <button onClick={startTimer} style={styles.startButton}>
          Start
        </button>
        <button onClick={stopTimer} style={styles.stopButton}>
          Stop
        </button>
        <div style={styles.count}>{count}</div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  timerContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '100px',
    marginRight: '10px',
    padding: '5px',
    fontSize: '16px',
  },
  startButton: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  stopButton: {
    padding: '8px 16px',
    fontSize: '16px',
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  count: {
    fontSize: '48px',
    marginLeft: '10px',
  },
};

export default Timer;
