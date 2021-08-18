import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import React from "react";
import {
  HeaderContainer,
  // HeaderLeft,
  // HeaderMid,
  // HeaderRight,
  HomeButton,
  PinLogo,
  SearchBar,
  Search,
  SearchInput,
  BellIcon,
  MsgIcon,
  ExpandMore,
} from "./HeaderElements";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        {/* <h1>Left</h1> */}
        <IconButton>
          <PinLogo src="https://www.freepnglogos.com/uploads/pinterest-icon-transparent-background-5.png" />
        </IconButton>
        <HomeButton>Home</HomeButton>
        <HomeButton>Today</HomeButton>

        {/* <h1>Mid</h1> */}
        <SearchBar>
          <Search></Search>
          <SearchInput placeholder="Search"></SearchInput>
        </SearchBar>

        {/* <h1>Right</h1> */}
        <IconButton>
          <BellIcon style={{ height: "32px", width: "32px" }} />
        </IconButton>
        <IconButton>
          <MsgIcon style={{ height: "28px", width: "28px" }} />
        </IconButton>
        <IconButton>
          <Avatar
            style={{ height: "24px", width: "24px" }}
            src="https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo"
          />
        </IconButton>
        <IconButton size="small">
          <ExpandMore />
        </IconButton>
      </HeaderContainer>
    </>
  );
};

export default Header;

/*

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderLeft>
          <IconButton>
            <PinLogo src="https://www.freepnglogos.com/uploads/pinterest-icon-transparent-background-5.png" />
          </IconButton>
          <HomeButton>Home</HomeButton>
          <HomeButton>Today</HomeButton>
        </HeaderLeft>

        <HeaderMid>
          <SearchBar>
            <Search></Search>
            <SearchInput placeholder="Search"></SearchInput>
          </SearchBar>
        </HeaderMid>

        <HeaderRight>
          <IconButton>
            <BellIcon style={{ height: "32px", width: "32px" }} />
          </IconButton>
          <IconButton>
            <MsgIcon style={{ height: "28px", width: "28px" }} />
          </IconButton>
          <IconButton>
            <Avatar
              style={{ height: "24px", width: "24px" }}
              src="https://lh3.googleusercontent.com/ogw/ADea4I5HL-IsHBtXW7Nh26jwXrnRbwmfay3pbLZCqNKRGQ=s32-c-mo"
            />
          </IconButton>
          <IconButton size="small">
            <ExpandMore />
          </IconButton>
        </HeaderRight>
      </HeaderContainer>
    </>
  );
};

export default Header;



*/
