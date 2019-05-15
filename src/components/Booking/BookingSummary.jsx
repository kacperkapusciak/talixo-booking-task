import React from "react";
import { connect } from "react-redux";

function BookingSummary({pickup, destination, options}) {
  return (
    <div>{pickup && destination ? "BookingSummary" : null}</div>
  );
}

const mapStateToProps = state => ({
  pickup: state.pickup,
  destination: state.destination,
  options: state.moreOptions,
});

export default connect(mapStateToProps)(BookingSummary);