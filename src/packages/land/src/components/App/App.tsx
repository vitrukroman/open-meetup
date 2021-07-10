import React from "react";
import useSkyContext from "Sky/useSkyContext";
import skyContext from "Sky/skyContext";
import DayTimeSwitcherButton from "Sky/DayTimeSwitcherButton";
import Orb from "Sky/Orb";
import House from "../House/House";
import classes from "./App.scss";

function App() {
  const skyCtx = useSkyContext();

  const backgroundColor = skyCtx.dayTime === "day" ? "white" : "#313a4a";
  return (
    <skyContext.Provider value={skyCtx}>
      <main
        style={{
          display: "flex",
          height: "calc(100% - 100px)",
          backgroundColor,
          padding: 50,
        }}
        className={classes.main}
      >
        <div
          style={{
            alignSelf: "flex-start",
          }}
        >
          <DayTimeSwitcherButton />
        </div>

        <div
          style={{
            textAlign: "center",
            flex: "1",
            alignSelf: "flex-end",
          }}
        >
          <House />
        </div>
        <div>
          <Orb />
        </div>
      </main>
    </skyContext.Provider>
  );
}

export default App;
