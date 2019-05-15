import React from "react";
import styled from "styled-components";
import { accent, unactive } from "../../utils/colors";
import { sm } from "../../utils/breakpoints";

function BookingSteps({active, color, bg}) {
  const data = [{id: 1, name: "Where & When"},
    {id: 2, name: "Choose a Car"},
    {id: 3, name: "Details & Payment"}];
  return (
    <StyledOl color={color} background={bg}>
      {data.map((step) => (
        step.id === active
          ? <StyledLi key={step.id} active background={bg}>{step.name}</StyledLi>
          : <StyledLi key={step.id}>{step.name}</StyledLi>
      ))}
    </StyledOl>
  );
}

const StyledOl = styled.ol`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  padding-top: 20px;
  color: ${props => props.color};
  background: ${props => props.background};
  list-style: none;
  counter-reset: num;
  @media (min-width: ${sm}) {
    flex-direction: row;
  }
`;

const StyledLi = styled.li`
  display: inline-block;
  counter-increment: num;
  position: relative;
  left: -14px;
  margin-left: 50px;
  font-family: "Open Sans";
  line-height: 30px;
  font-size: 15px;
 
  &::before {
    content: counter(num);
    font-weight: bold;
    font-size: 20px;
    color: ${props => props.active ? (props.background === "white" ? accent : "white") : unactive};
    text-align: center;
    position: absolute;
    left: -35px;
    width: 30px;
    line-height: 25px;
    border-width: 3px;
    border-style: solid;
    border-color: ${props => props.active ? accent : unactive};
    border-radius: 50%;
    margin-right: 10px;
   }
   
  @media (max-width: ${sm}) {
    width: 130px;
    margin-top: 5px;
  }
`;

export default BookingSteps;