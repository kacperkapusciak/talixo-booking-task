import styled from "styled-components";

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
  top: 48px;
  left: 0px;
  z-index: 2;
  
  span {
    display: ${props => props.show ? "block" : "none"};
    background: white;
    padding: ${props => props.small ? "8px 12px" : "8px 32px 8px 12px"};
    min-height: 48px;
    // vertical-align: middle;
    border-bottom: 1px solid #ccc;
    z-index: 2;
    &:hover {
      cursor: pointer;
      background: #ccc;
    }
    &:last-child {
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;

export default Dropdown;