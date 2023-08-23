import * as React from 'react';
export const Stopwatch = () => {
  const [time, setTime] = React.useState(0);
  const [isRunning, setRunning] = React.useState(false);
  React.useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, time]);
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 36000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;
  const start = () => {
    setRunning(!isRunning);
  };
  const reset = () => {
    setTime(0);
  };
  return (
    <>
      <div>
        {' '}
        <span>Hours</span> - <span>{hours}</span>
      </div>
      <div>
        {' '}
        <span>Minutes</span> - <span>{minutes}</span>
      </div>
      <div>
        {' '}
        <span>Seconds</span> - <span>{seconds}</span>
      </div>
      <div>
        {' '}
        <span>Milliseconds</span> - <span>{milliseconds}</span>
      </div>
      <div>
        {' '}
        <span>
          <button onClick={start}>{!isRunning ? 'Start' : 'Stop'}</button>
          <button onClick={reset}>Reset</button>
        </span>
      </div>
    </>
  );
};
