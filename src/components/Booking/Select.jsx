import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";

import * as actions from "../../store/actions";
import Dropdown from "../UI/Dropdown";
import { blackFont, iconBackground } from "../../utils/colors";

function Select({id, range, defaultValue, hint, icon, onOptionUpdate}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isHintOpen, setHintOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);


  function handleOptionClick(num) {
    setDropdownOpen(false);
    setValue(num);
    onOptionUpdate(id, num);
  }

  return (
    <Wrapper>
      <Dropdown show={isDropdownOpen} small center>
        {range.map(num => <span key={id + num} onClick={() => handleOptionClick(num)}>{num}</span>)}
      </Dropdown>
      <Hint show={isHintOpen}>
        {hint}
      </Hint>
      <Label icon={icon} onMouseEnter={() => setHintOpen(true)} onMouseLeave={() => setHintOpen(false)}/>
      <StyledSelect onClick={() => setDropdownOpen(!isDropdownOpen)}>
        {value}
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
  defaultValue: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  hint: PropTypes.string.isRequired
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 48px auto 48px;
  margin: 2px;
  box-sizing: border-box;
  position: relative;
`;

const Label = styled.label`
  background: ${iconBackground} url(${props => props.icon}) no-repeat center center;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: inline-block;
  height: 48px;
  z-index: 1;
`;

const Hint = styled.div`
  position: absolute;
  display: ${props => props.show ? "block" : "none"};
  width: 157px;
  font-size: 12px;
  border-radius: 3px;
  background: ${iconBackground};
  box-shadow: 0 0 10px;
  padding: 14px 8px;
  bottom: 50px;
  z-index: 2;
`;

const StyledSelect = styled.span`
  border-right: 1px solid #ccc;
  color: ${blackFont};
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

const mapDispatchToProps = dispatch => ({
  onOptionUpdate: (id, value) => dispatch(actions.optionUpdate(id, value))
});

export default connect(null, mapDispatchToProps)(Select);