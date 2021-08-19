import React from "react";
import Card from "../components/Card";
import styled from "styled-components";

// import Card from "./components/Card";
import { CardHome, CardOne, CardThree, CardTwo } from "../components/Data";

const Home = () => {
  return (
    // <div className="cards">
    <Cards
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card {...CardOne} />
      <Card {...CardTwo} />
      <Card {...CardThree} />
      {CardHome.map((eachCard) => {
        return <Card {...eachCard} />;
      })}
    </Cards>
    // </div>
  );
};

export default Home;

export const Cards = styled.div`
  display: flex;
`;
