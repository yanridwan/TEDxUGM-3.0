'use client';
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC<{ targetDates: string[] }> = ({ targetDates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<{ weeks: number; days: number; hours: number; minutes: number }>({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const currentTargetDate = new Date(targetDates[currentIndex]).getTime();

    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const timeDifference = currentTargetDate - currentTime;

      if (timeDifference > 0) {
        const weeks = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ weeks, days, hours, minutes });
      } else {
        // Move to the next target date
        const nextIndex = currentIndex + 1;
        if (nextIndex < targetDates.length) {
          setCurrentIndex(nextIndex);
        } else {
          // No more target dates, stop the countdown
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex, targetDates]);

  return (
    <div className='grid grid-cols-4 max-lg:grid-cols-2 md:gap-20 gap-5 max-sm:w-3/4 max-sm:mx-auto mx-20'>
      <div className={`countdown ${timeLeft.weeks!=0?'':'max-lg:hidden'}`}>
        <p className='text-[calc(3vw+2em)]'>{timeLeft.weeks}</p>
        <p>{timeLeft.weeks==1?'Week':'Weeks'}</p>
      </div>
      <div className={`countdown ${timeLeft.days!=0?'':'max-lg:hidden'}`}>
        <p className='text-[calc(3vw+2em)]'>{timeLeft.days}</p>
        <p>{timeLeft.days==1?'Day':'Days'}</p>
      </div>
      <div className={`countdown ${timeLeft.hours!=0 && timeLeft.weeks==0?'':'max-lg:hidden'}`}>
        <p className='text-[calc(3vw+2em)]'>{timeLeft.hours}</p>
        <p>{timeLeft.hours==1?'Hour':'Hours'}</p>
      </div>
      <div className={`countdown ${timeLeft.minutes!=0 && timeLeft.days==0?'':'max-lg:hidden'}`}>
        <p className='text-[calc(3vw+2em)]'>{timeLeft.minutes}</p>
        <p>{timeLeft.minutes==1?'Minute':'Minutes'}</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
