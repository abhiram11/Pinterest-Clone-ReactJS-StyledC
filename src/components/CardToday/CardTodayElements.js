import styled from "styled-components";

export const CardTodayContainer = styled.div`
  display: flex;
  width: 480px;
  height: 322px;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 14px;
  margin: 20px 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({ imgUrl }) => (imgUrl ? imgUrl : "")});
  cursor: pointer;
  position: relative;
`;

export const CardTodayText = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 20px;
  text-align: center;
`;
