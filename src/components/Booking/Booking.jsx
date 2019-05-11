import React from "react";
import styled from "styled-components";
import Header from "../UI/Header";
import BookingSteps from "../UI/BookingSteps";
import BookingForm from "./BookingForm";
import YourBooking from "./YourBooking";
import Container from "../UI/Containter";
import { primary } from "../../utils/colors";
import {lg} from "../../utils/breakpoints";

function Booking() {
  return (
    <>
      <Header/>
      <Container bg={primary}>
        <BookingSteps active={1}/>
        <Grid>
          <BookingForm/>
          <YourBooking/>
        </Grid>
      </Container>
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: ${lg}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export default Booking;
