import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CallMadeIcon from "@material-ui/icons/CallMade";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export const CardContainer = styled.div`
  display: flex;
  width: 236px;
  min-height: 320px;
  max-height: 420px;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 14px;
  margin 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`;

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const CardTopText = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #efefef;
`;

export const ExpandMore = styled(ExpandMoreIcon)`
  margin-left: 12px;
`;

export const CardTopLink = styled.div`
  background: #b01030;
  color: white;
  padding: 10px 20px;
  border-radius: 40px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #840c24;
  }
`;

export const CardBottomLeft = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  background: #efefef;
  border-radius: 24px;
  padding: 0 14px;
  margin-right: 4px;

  opacity: 0.8;

  &:hover {
    background: whitesmoke;
    opacity: 1;
  }
`;
export const ArrowIcon = styled(CallMadeIcon)`
  padding-right: 5px;
`;

export const CardBottomRight = styled.div`
  //   cursor: pointer;
`;

export const Share = styled(CloudUploadIcon)`
  background: #efefef;
  margin-right: 8px;
  opacity: 0.8;
  padding: 8px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background: whitesmoke;
    opacity: 1;
  }
`;

export const Dots = styled(MoreHorizIcon)`
  background: #efefef;
  opacity: 0.8;
  cursor: pointer;
  border-radius: 100%;
  margin-right: 4px;

  padding: 8px;
  &:hover {
    background: whitesmoke;
    opacity: 1;
  }
`;

//

/*
div {
    background-image: url('http://www.pets4homes.co.uk/images/articles/1111/large/feline-influenza-all-about-cat-flu-5239fffd61ddf.jpg');
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 0;
//    padding-top: 66.64%; /* (img-height / img-width * container-width) */
//               /* (853 / 1280 * 100) */
//}

//*/

/*
<div style="background-image: url(http://your-image.jpg);">
 <img src="http://your-image.jpg" style="visibility: hidden;" />
</div>
*/
