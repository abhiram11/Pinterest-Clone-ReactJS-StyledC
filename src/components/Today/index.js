import React from "react";
import CardToday from "../CardToday";
import {
  RevertHome,
  TickMark,
  TodayCards,
  TodayFooter,
  TopText,
} from "./TodayElements";
import { CardTodayData } from "../Data";

const Today = () => {
  return (
    <>
      {/* <h1>Hi</h1> */}
      <TopText>
        <h2>{new Date().toISOString().slice(0, 10)}</h2>
        <h1>Stay Inspired</h1>
      </TopText>
      <TodayCards>
        {CardTodayData.map((days) => {
          return <CardToday {...days} />;
        })}
      </TodayCards>
      <TodayFooter>
        <TickMark />
        <p>That's all for today!</p>
        <h3>Come back tomorrow for more inspiration</h3>{" "}
        <RevertHome to="/">
          <h4>Go to Home Feed</h4>
        </RevertHome>
      </TodayFooter>
    </>
  );
};

export default Today;
