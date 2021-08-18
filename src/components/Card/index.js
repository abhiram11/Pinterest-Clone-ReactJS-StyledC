import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import {
  ArrowIcon,
  CardBottom,
  CardBottomLeft,
  CardBottomRight,
  CardContainer,
  CardTop,
  CardTopLink,
  CardTopText,
  Dots,
  Share,
} from "./CardElements";

const Card = ({ playListName, imgUrl, link }) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      {/* <h1>Hi</h1>
      Card container */}
      <CardContainer
        onMouseEnter={onHover}
        onMouseLeave={onHover}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        {hover ? (
          <>
            <CardTop>
              <CardTopText>
                <h2>{playListName}</h2>
                <ExpandMore />
              </CardTopText>
              <CardTopLink>Save</CardTopLink>
            </CardTop>
            <CardBottom>
              <CardBottomLeft>
                <ArrowIcon style={{ height: "16px", width: "16px" }} />
                <h4>Link</h4>
              </CardBottomLeft>
              <CardBottomRight>
                <Share />
                <Dots />
              </CardBottomRight>
            </CardBottom>
          </>
        ) : (
          <></>
        )}
      </CardContainer>
    </>
  );
};

export default Card;
