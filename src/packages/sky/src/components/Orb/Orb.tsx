import React, { useContext } from "react";
import skyContext from "../../context/skyContext";
import Sun from "./sun.svg";
import Moon from "./moon.svg";
import classes from './Orb.scss'

const Orb = () => {
  const { dayTime } = useContext(skyContext);
  const Picture = dayTime === "day" ? Sun : Moon;

  return (
    <>
      <img src={Picture} className={classes.orb}/>
    </>
  );
};

export default Orb;
