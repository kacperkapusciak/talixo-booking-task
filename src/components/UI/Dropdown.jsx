import styled from "styled-components";
import {md} from "../../utils/breakpoints";
import { accent, blackFont } from "../../utils/colors";

const Dropdown = styled.div`
  color: black;
  box-sizing: border-box;
  position: absolute;
  display: ${props => props.show ? "inline-block" : "none"};
  font-size: 19px;
  overflow: auto;
  text-align: ${props => props.center ? "center" : undefined};
  height: 250px;
  width: ${props => props.small ? "100px" : "378px"};
  border-radius: 3px;
  top: ${props => props.small ? "48px" : "68px"};
  left: 0px;
  z-index: 2;
  
  @media (min-width: ${md}) {
    top: 48px;
  }
  
  span {
    display: ${props => props.show ? "block" : "none"};
    background: white;
    padding: ${props => props.small ? "8px 12px" : "8px 32px 8px 12px"};
    min-height: 48px;
    border-bottom: 1px solid #ccc;
    z-index: 2;
    &:hover {
      cursor: pointer;
      background: #ccc;
      color: ${props => props.small ? accent : blackFont};
    }
    &:last-child {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;

export default Dropdown;