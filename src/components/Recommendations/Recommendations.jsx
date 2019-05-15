import React from "react";
import styled from "styled-components";
import Header from "../UI/Header";
import Container from "../UI/Containter";
import BookingSteps from "../UI/BookingSteps";
import {blackFont} from "../../utils/colors";
import serverMock from "../../serverMock";
import {md} from "../../utils/breakpoints";
import Recommendation from "./Recommendation";

function Recommendations() {
  const [first, ...rest] = serverMock;

  return (
    <>
      <Header/>
      <Container bg={"#fff"}>
        <BookingSteps active={2} color={blackFont} bg={"white"}/>
        <Wrapper>
          <Title>
            <span>Our recommendations for your travel</span>
          </Title>
          <Recommendation offer={first}/>
          <Title>
            <span>Other available options</span>
          </Title>
          {rest.map((el, i) => <Recommendation key={`recomm-${i}`} offer={el}/>)}
        </Wrapper>
      </Container>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 10px;
  @media (min-width: ${md}) {
    margin: 0 40px;
  }
`;

const Title = styled.h2`
  color: #adadad;
  display: block;
  font-size: 12px;
  font-weight: 600;
  padding: 20px 0;
  
  text-align: center;
  text-transform: uppercase;
  position: relative;
  
  &::before {
    background: #cfcfcf;
    content: '';
    height: 1px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
  }
  
  span {
    background: #ffffff;
    display: inline-block;
    margin: 0 40px;
    padding: 0 20px;
    position: relative;
  }
`;

export default Recommendations;
