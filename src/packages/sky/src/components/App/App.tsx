import React from "react";
import "./App.scss";
import useSkyContext from "../../context/useSkyContext";
import skyContext from "../../context/skyContext";
import Orb from "../Orb/Orb";
import DayTimeSwitcherButton from "../DayTimeSwitcherButton/DayTimeSwitcherButton";

function App() {
  const skyCtx = useSkyContext();

  return (
    <skyContext.Provider value={skyCtx}>
      <Orb />
      <DayTimeSwitcherButton />
    </skyContext.Provider>
  );
}

export default App;
