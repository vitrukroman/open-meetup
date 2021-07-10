import React, { useContext } from "react";

import skyContext from "Sky/skyContext";
import HouseDay from "./house.svg";
import HouseNight from "./houseNight.svg";
import classes from "./House.scss";

const House = () => {
  const { dayTime } = useContext(skyContext);
  const imgSrc = dayTime === "day" ? HouseDay : HouseNight;

  return <img src={imgSrc} className={classes.house} />;
};

export default House;
