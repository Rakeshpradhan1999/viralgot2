import { useEffect, useState } from "react";
import moment from "moment";

const Index = () => {
  //   const [value, setValue] = useState(0);
  //   console.log(value);
  // const difference = +new moment("2021-9-30 00:00:00") - +new Date();
  const difference = +new moment("2021-08-30 12:00").utc() - +new Date();
  console.log(difference);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((difference / 1000 / 60) % 60));
        setSeconds(Math.floor((difference / 1000) % 60));
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });
  return (
    <div className="flex">
      <Time time={days} title="days" />
      <Time time={hours} title="hrs" />
      <Time time={minutes} title="min" />
      <Time time={seconds} title="sec" />
    </div>
  );
};

export default Index;

const Time = ({ time, title }) => (
  <span className="ml-4 text-center">
    <span className="block text-xl sm:text-2xl">
      {time.toString().padStart(2, 0)}
    </span>
    <span
      className="font-serif font-thin uppercase block"
      style={{ fontSize: 10, letterSpacing: 3 }}
    >
      {title}
    </span>
  </span>
);
