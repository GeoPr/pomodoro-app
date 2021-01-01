import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimeLeft } from '../../redux/reducers/timerReducer/actions';
import { TApp } from '../../redux/store';
import './Timer.scss';

export const Timer: FC = () => {
  const timers = useSelector((state: TApp) => state.timers);
  const currentTimer = timers.find(timer => timer.isActive)!;
  const dispatch = useDispatch();

  const [shouldStart, setShouldStart] = useState(false);
  const [strokeDashArray, setStrokeDashArray] = useState(``);
  const [strokeDashOffset, setStrokeDashOffset] = useState(0);
  const [passed, setPassed] = useState(0);
  const [minutes, setMinutes] = useState(currentTimer.time);
  const [timeInterval, setTimeInverval] = useState<any>(null);

  const r = 90;
  const circumference = 2 * Math.PI * r;

  let timePassed = passed;
  let timeLeft = currentTimer.timeLeft;
  let limitTime = currentTimer.time * 60;

  useEffect(() => {
    setMinutes(prev => currentTimer.time);
    setPassed(0);
    setStrokeDashOffset(0);
    setStrokeDashArray(``);
    setShouldStart(false);
    clearInterval(timeInterval);
    dispatch(setTimeLeft());

    return () => clearInterval(timeInterval);
  }, [currentTimer, currentTimer.time]);

  const calculateTimeFraction = () => {
    const rawTimeFraction = timeLeft / limitTime;
    return rawTimeFraction - (1 / limitTime) * (1 - rawTimeFraction);
  };

  function setCircleDasharray() {
    setStrokeDashArray(prev => {
      return `${(calculateTimeFraction() * circumference).toFixed(
        0,
      )} ${circumference}`;
    });
  }

  function reset() {
    timeLeft = 0;
    dispatch(setTimeLeft());
    setStrokeDashArray(`${circumference} ${circumference}`);
    setStrokeDashOffset(circumference);
    setShouldStart(false);
    setMinutes(0);
  }

  const updateTime = () => {
    if (timePassed >= limitTime || shouldStart) {
      clearInterval(timeInterval);
      return;
    }

    const interval = setInterval(() => {
      timePassed++;
      setPassed(prev => timePassed);
      timeLeft = limitTime - timePassed;

      if (timeLeft === 0) {
        reset();
        clearInterval(interval);
        return;
      }

      setStrokeDashOffset(0);
      setCircleDasharray();
      setMinutes(prev => Math.ceil(timeLeft / 60));
    }, 1000);

    setTimeInverval(interval);
  };

  const clickHandler = () => {
    setShouldStart(prev => !prev);
    updateTime();
  };

  return (
    <div className="sc__timer timer">
      <div className="timer__body">
        <svg className="timer__item" width="200" height="200">
          <circle
            stroke="#eee"
            cx="50%"
            cy="50%"
            strokeWidth="15"
            r={r}
            fill="transparent"
          />
          <circle
            stroke={currentTimer.color}
            cx="50%"
            cy="50%"
            strokeWidth="10"
            r={r}
            fill="transparent"
            strokeDasharray={strokeDashArray}
            strokeDashoffset={strokeDashOffset}
          />
        </svg>
        <div className="timer__info">
          <div className="timer__time">{minutes}</div>
          <button className="timer__button" onClick={clickHandler}>
            {!shouldStart ? 'start' : 'pause'}
          </button>
        </div>
      </div>
    </div>
  );
};
