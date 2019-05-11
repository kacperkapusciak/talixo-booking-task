import React from "react";
import styled from "styled-components";
import {accent, unactive} from "./colors";

function BookingSteps({active}) {
  const data = [{id: 1, name: "Where & When"},
                {id: 2, name: "Choose a Car"},
                {id: 3, name: "Details & Payment"}];
  return (
    <Flex>
      <StyledOl>
        {data.map((step) => (
          step.id === active
            ? <StyledLi active>{step.name}</StyledLi>
            : <StyledLi>{step.name}</StyledLi>
        ))}
      </StyledOl>
    </Flex>
  );
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledOl = styled.ol`
   color: black;
   list-style: none;
   counter-reset: num;
`;

const StyledLi = styled.li`
   display: inline-block;
   counter-increment: num;
   position: relative;
   left: 100px;
   margin-left: 50px;
   font-family: "Open Sans";
   line-height: 30px;
   font-size: 15px;
 
   &::before {
     content: counter(num);
     font-weight: bold;
     font-size: 20px;
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
`;

export default BookingSteps;