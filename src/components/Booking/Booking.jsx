import React from "react";
import Header from "../UI/Header";
import BookingSteps from "../UI/BookingSteps";

function Booking() {
  return (
    <>
      <Header/>
      <BookingSteps active={1}/>
    </>
  );
}

export default Booking;
