import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SmsIcon from "@material-ui/icons/Sms";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export const HeaderContainer = styled.div`
  display: flex;
  background: #fff;
  align-items: center;
  text-align: center;
  padding: 10px;
`;

// export const HeaderLeft = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   flex: 0.23;
//   margin: 0 10px;
// `;

export const PinLogo = styled.img`
  height: 26px;
  object-fit: contain;
  cursor: pointer;
  margin: 0 2px;
`;

export const HomeButton = styled.div`
  background-color: black;
  color: white;
  cursor: pointer;
  padding: 10px 12px;
  border-radius: 18px;
  margin: 0 2px;
`;

// export const HeaderMid = styled.div`
//   flex: 0.54;
// `;

export const SearchBar = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background: #efefef;
  padding: 10px 0;
  border-radius: 24px;
  margin: 0 4px;
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
  background: #efefef;
  font-size: 16px;
`;

// export const HeaderRight = styled.div`
//   align-items: center;
//   justify-content: flex-end;
//   flex: 0.23;
//   display: flex;
//   margin: 0 10px;
// `;

export const BellIcon = styled(NotificationsIcon)``;

export const MsgIcon = styled(SmsIcon)``;

export const ExpandMore = styled(ExpandMoreIcon)``;
