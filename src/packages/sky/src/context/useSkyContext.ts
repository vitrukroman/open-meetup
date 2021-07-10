import { useState } from "react";
import { SkyContext } from "./skyContext";

const useSkyContext = (): SkyContext => {
  const [dayTime, setDayTime] = useState("day");
  const switchDayTime = () => {
    const nextDayTime = dayTime === "day" ? "night" : "day";

    setDayTime(nextDayTime);
  };

  return {
    dayTime,
    switchDayTime,
  };
};

export default useSkyContext;
