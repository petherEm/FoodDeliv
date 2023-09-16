"use client";

import Countdown from "react-countdown";

const endingDate = new Date("2023-10-10");

const CountDownComponent = () => {
  return <Countdown className="font-bold text-5xl text-yellow-500" date={endingDate} />;
};

export default CountDownComponent;
