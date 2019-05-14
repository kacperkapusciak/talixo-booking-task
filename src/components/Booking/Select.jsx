import React, {useState} from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Dropdown from "../UI/Dropdown";

function Select({id, range, defaultValue, hint, icon}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Wrapper>
      <Dropdown show={isDropdownOpen} small center>
        {range.map(num => <span key={id + num}>{num}</span>)}
      </Dropdown>
      <Label icon={icon} />
      <StyledSelect onClick={() => setDropdownOpen(!isDropdownOpen)}>
        {defaultValue ? defaultValue : 0}
      </StyledSelect>
      <Arrow onClick={() => setDropdownOpen(!isDropdownOpen)} isOpen={isDropdownOpen}>
        <b>&#8250;</b>
      </Arrow>
    </Wrapper>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  range: PropTypes.arrayOf(PropTypes.number).isRequired,
  icon: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 48px auto 48px;
  margin: 2px;
  position: relative;
`;

const Label = styled.label`
  background: #ebeced url(${props => props.icon}) no-repeat center center;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: inline-block;
  height: 48px;
  z-index: 1;
`;

const StyledSelect = styled.span`
  border-right: 1px solid #ccc;
  color: #4c4c4c;
  background: white;
  font-size: 19px;
  text-align: center;
  height: 48px;
  display: block;
  margin-top: 0;
  padding: 11px 12px;
  line-height: 25px;
  cursor: pointer;
`;

const Arrow = styled.div`
  height: 48px;
  background: white;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  cursor: pointer;
  
  b {
    display: inline-block;
    font-weight: 300;
    transform-origin: center center;
    transition: all 0.25s ease-in-out;
    position: relative;
    transform: rotateZ(90deg);
    transform: ${props => props.isOpen ? "rotateZ(90deg) rotateY(180deg)" : "rotateZ(90deg)"};
    font-size: 62px;
    height: 27px;
    width: 15px;
    left: 20px;
    top: 10px;
  }
`;

export default Select;