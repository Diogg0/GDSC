"use client";
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference == 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const oneDay = 1000 * 60 * 60 * 24;
    const oneHour = 1000 * 60 * 60;
    const oneMinute = 1000 * 60;
    const oneSecond = 1000;

    const days = Math.floor(difference / oneDay);
    const hours = Math.floor((difference % oneDay) / oneHour);
    const minutes = Math.floor((difference % oneHour) / oneMinute);
    const seconds = Math.floor((difference % oneMinute) / oneSecond);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="text-center">
      <span className=" text-gred">{addLeadingZero(timeLeft.days)}</span>:
      <span className=" text-gyellow">{addLeadingZero(timeLeft.hours)}</span>:
      <span className=" text-ggreen">{addLeadingZero(timeLeft.minutes)}</span>:
      <span className=" text-gblue">{addLeadingZero(timeLeft.seconds)}</span>
    </div>
  );
};

export default CountdownTimer;
