import styled from "styled-components";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export const TopText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 16px;
`;

export const TodayCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 42px;
`;

export const TodayFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 240px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  p {
    margin-top: 14px;
    margin-bottom: 8px;
  }
`;

export const TickMark = styled(CheckCircleIcon)`
  font-size: 36px !important;
`;

export const RevertHome = styled(Link)`
  background-color: #efefef;
  padding: 10px 12px;
  border-radius: 24px;
  margin-top: 36px;
  cursor: pointer;
  text-decoration: none;

  :hover {
    background-color: lightgray;
  }
`;
