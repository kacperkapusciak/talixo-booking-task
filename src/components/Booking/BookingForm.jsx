import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import apiKey from "../../utils/apiKey";
import { md, lg } from "../../utils/breakpoints";
import { accent, blackFont, unactive, background } from "../../utils/colors";
import Dropdown from "../UI/Dropdown";
import MoreOptions from "./MoreOptions";
import * as actions from "../../store/actions";

function BookingForm(props) {
  const retrievePickup = props.pickupStored ? props.pickupStored.description : "";
  const retrieveDestination = props.destinationStored ? props.destinationStored.description : "";
  const retrieveVoucherCode = props.voucherCodeStored || "";

  const [pickup, setPickup] = useState(retrievePickup);
  const [destination, setDestination] = useState(retrieveDestination);
  const [voucherCode, setVoucherCode] = useState(retrieveVoucherCode);

  const [places, setPlaces] = useState([]);

  const [pickupChosen, setPickupChosen] = useState(retrievePickup);
  const [destinationChosen, setDestinationChosen] = useState(retrieveDestination);

  const [displayPickupDropdown, setPickupDropdown] = useState(false);
  const [displayDestinationDropdown, setDestinationDropdown] = useState(false);


  async function getPlace(input) {
    try {
      const response = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}&sessiontoken=1234567`,);
      setPlaces(response.data.predictions);
    } catch (error) {
      console.log("Error", error.message);
    }
  }


  function handlePickupChange(event) {
    setPickup(event.target.value);
    if (pickup.length >= 3) {
      getPlace(pickup);
      setPickupDropdown(true);
    } else {
      setPickupDropdown(false);
    }
  }

  function handlePickupClick(value) {
    setPickup(value.description);
    setPickupDropdown(false);
    setPlaces([]);
    setPickupChosen(value.description);
    props.onSetPickup(value);
  }

  function handleDestinationChange(event) {
    setDestination(event.target.value);
    if (destination.length >= 3) {
      getPlace(destination);
      setDestinationDropdown(true);
    } else {
      setDestinationDropdown(false);
    }
  }

  function handleDestinationClick(value) {
    setDestination(value.description);
    setDestinationDropdown(false);
    setPlaces([]);
    setDestinationChosen(value.description);
    props.onSetDestination(value);
  }


  return (
    <>
      <Form>
        <Flex>
          <Dropdown show={displayPickupDropdown}>
            {places ? places.map((el, index) => <span key={`pickup-${index}`}
                                                      onClick={() => handlePickupClick(el)}>{el.description}</span>) : null}
          </Dropdown>
          <Label htmlFor="pickup">Pick up:</Label>
          <Input name="pickup" type="text" placeholder="e.g. Torstrasse 124, Berlin" value={pickup} autoComplete="off"
                 onChange={handlePickupChange}/>
        </Flex>
        <Flex>
          <Dropdown show={displayDestinationDropdown}>
            {places ? places.map((el, index) => <span key={`destination-${index}`}
                                                      onClick={() => handleDestinationClick(el)}>{el.description}</span>) : null}
          </Dropdown>
          <Label htmlFor="destination">Destination:</Label>
          <Input name="destination" type="text" placeholder="e.g. Tegel Airport" value={destination} autoComplete="off"
                 onChange={handleDestinationChange}/>
        </Flex>
        <Flex>
          <Label htmlFor="destination">Voucher code (optional):</Label>
          <Input name="voucherCode" type="text" value={voucherCode} autoComplete="off"
                 onChange={e => setVoucherCode(e.target.value)}/>
        </Flex>
        <p style={{padding: "10px 0", fontSize: "16px"}}>For 1-2 passengers with 1-2 bags</p>
        <MoreOptions/>
        <Button to="/what" onClick={() => props.onSetVoucherCode(voucherCode)}
                disabled={!(pickupChosen && destinationChosen)}>Start booking</Button>
      </Form>

    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  padding: 8px;
  color: white;
  box-sizing: border-box;
  @media (min-width: ${md}) { 
    width: 708px;
    margin: 0 auto;
  }
  @media (min-width: ${lg}) { 
    width: 500px;
  }
`;

const Flex = styled.div`
  display: flex;
  margin: 1px;
  flex-direction: column;
  position: relative;
  @media (min-width: ${md}) { 
    flex-direction: row;
    width: 100%;
  }
`;

const Label = styled.label`
  color: white;
  @media (min-width: ${md}) {
    background: white;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    color: #a8a8a8;
    font-size: 19px;
    height: 48px;
    padding: 9px 2px 9px 12px;
    white-space: nowrap;
    text-align: center;
    line-height: 29px;
  }
`;

const Input = styled.input`
  -webkit-appearance: none;
  border: none;
  border-radius: 3px;
  color: ${blackFont};
  font-size: 19px;
  height: 48px;
  margin: 0;
  padding: 11px 12px 11px 4px;
  width: 100%;
  
  &::placeholder {
    font-family: 'Open Sans';
    font-weight: 200;
    color: #ccc;
  }
  
  @media (min-width: ${md}) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;

const Button = styled(Link)`
  box-sizing: border-box;
  background-color: ${accent};
  border: 4px;
  border-radius: 3px;
  color: white;
  cursor: pointer;
  margin: 0;
  text-align: center;
  line-height: 30px;
  padding: 12px 20px;
  font-size: 26px;
  font-weight: 400;
  
  @media (min-width: ${md}) {
    width: 320px;
    height: 60px;
    float: left;
  }
  
  @media (min-width: ${lg}) {
    width: 100%;
  }
  
  &:hover {
    color: white;
  }
  
  &[disabled] {
    cursor: disabled; 
    pointer-events: none;
    color: ${unactive};
    background: ${background};
  }
`;

const mapStateToProps = state => ({
  pickupStored: state.route.pickup,
  destinationStored: state.route.destination,
  voucherCodeStored: state.route.voucherCode
});

const mapDispatchToProps = dispatch => ({
  onSetPickup: (value) => dispatch(actions.setPickup(value)),
  onSetDestination: (value) => dispatch(actions.setDestination(value)),
  onSetVoucherCode: (value) => dispatch(actions.setVoucherCode(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookingForm);