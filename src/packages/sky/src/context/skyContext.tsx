import React from "react";

export type DAY_TIME = "day" | "night";

export interface SkyContext {
  dayTime: DAY_TIME;
  switchDayTime: () => void;
}

export const SKY_CONTEXT_DEFAULT_VALUE: SkyContext = {
  dayTime: "day",
  switchDayTime: () => ({}),
};

const skyContext = React.createContext<SkyContext>(SKY_CONTEXT_DEFAULT_VALUE);

export default skyContext;
