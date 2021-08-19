import React from "react";
import { CardTodayContainer, CardTodayText } from "./CardTodayElements";

const CardToday = ({ title, description, imgUrl }) => {
  return (
    <>
      {/* <h1>Hi</h1>
      CardToday container */}
      <CardTodayContainer imgUrl={imgUrl}>
        <CardTodayText>
          <h3>{title}</h3>
          <h1>{description}</h1>
        </CardTodayText>
      </CardTodayContainer>
    </>
  );
};

export default CardToday;
