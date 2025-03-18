"use client";

import { useState, useEffect } from "react";

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate) - new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center bg-white shadow-md rounded-lg p-3 md:p-6 border border-amber-300">
      <h3 className="text-md md:text-lg text-center font-semibold text-amber-800 mb-3 md:mb-0 md:mr-4">
        অপারেশনের সময় বাকি (আনুমানিক):
      </h3>

      <div className="grid grid-cols-4 gap-3 md:gap-6 text-center">
        {/* Days */}
        <div className="flex flex-col items-center bg-amber-100 px-4 py-2 rounded-lg shadow">
          <span className="text-2xl md:text-3xl font-bold text-amber-800">
            {timeLeft.days}
          </span>
          <span className="text-xs md:text-sm font-medium text-amber-700">
            দিন
          </span>
        </div>

        {/* Hours */}
        <div className="flex flex-col items-center bg-amber-100 px-4 py-2 rounded-lg shadow">
          <span className="text-2xl md:text-3xl font-bold text-amber-800">
            {timeLeft.hours.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm font-medium text-amber-700">
            ঘণ্টা
          </span>
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center bg-amber-100 px-4 py-2 rounded-lg shadow">
          <span className="text-2xl md:text-3xl font-bold text-amber-800">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm font-medium text-amber-700">
            মিনিট
          </span>
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center bg-amber-100 px-4 py-2 rounded-lg shadow">
          <span className="text-2xl md:text-3xl font-bold text-amber-800">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </span>
          <span className="text-xs md:text-sm font-medium text-amber-700">
            সেকেন্ড
          </span>
        </div>
      </div>
    </div>
  );
}
