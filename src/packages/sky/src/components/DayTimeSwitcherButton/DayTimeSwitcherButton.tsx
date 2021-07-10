import React, { useContext } from "react";
import classes from "./DayTimeSwitcherButton.scss";
import skyContext from "../../context/skyContext";

const DayTimeSwitcherButton = () => {
  const { dayTime, switchDayTime } = useContext(skyContext);
  const buttonLabel = dayTime === "day" ? "Ніч" : "День";
  return (
    <a href="#" className={classes.button} onClick={switchDayTime}>
      {buttonLabel}
    </a>
  );
};

export default DayTimeSwitcherButton;
