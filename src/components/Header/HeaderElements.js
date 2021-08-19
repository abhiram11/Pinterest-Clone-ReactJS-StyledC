import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SmsIcon from "@material-ui/icons/Sms";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.nav`
  display: flex;
  background: #fff;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

export const PinLogo = styled.img`
  height: 26px;
  object-fit: contain;
  cursor: pointer;
  margin: 0 2px;
`;

export const HomeButton1 = styled(Link)`
  color: ${({ activeButton }) => (activeButton ? "white" : "black")};
  background-color: ${({ activeButton }) => (activeButton ? "black" : "white")};
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 18px;
  margin: 0 2px;
  text-decoration: none;
`;

export const HomeButton2 = styled(HomeButton1)`
  color: ${({ activeButton }) => (activeButton ? "black" : "white")};
  background-color: ${({ activeButton }) => (activeButton ? "white" : "black")};
`;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: #efefef;
  padding: 10px 0;
  border-radius: 24px;
  margin: 0 4px;

  :hover {
    background: lightgray;
  }
`;
export const Search = styled(SearchIcon)`
  margin-left: 10px;
  color: #767676;
  //   font-weight: 800 !important;
`;

export const SearchInput = styled.input`
  outline: none;
  border: none;
  width: 90%;
  background: none;
  font-size: 16px;
`;

export const BellIcon = styled(NotificationsIcon)``;

export const MsgIcon = styled(SmsIcon)``;

export const ExpandMore = styled(ExpandMoreIcon)``;
