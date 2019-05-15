import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Select from "./Select";
import { xsm } from "../../utils/breakpoints";

import iconAnimals from "../../img/icon_animals.png";
import iconChildren from "../../img/icon_children.png";
import iconLuggage from "../../img/icon_luggage.png";
import iconSeats from "../../img/icon_seats.png";
import iconSportLuggage from "../../img/icon_sport_luggage.png";


function MoreOptions(props) {
  const moreOptions = [
    {
      id: "passengers",
      range: [...Array(8).keys()].map(i => i + 1), //[1,2,...,8]
      defaultValue: props.passengers || 2,
      hint: "Passengers",
      icon: iconSeats
    },
    {
      id: "luggage",
      range: [...Array(9).keys()], //[0,1,2,...,8]
      defaultValue: props.luggage || 2,
      hint: "max. 20kg each. 1 piece of hand luggage is included per passenger",
      icon: iconLuggage
    },
    {
      id: "sport-luggage",
      range: [0, 1, 2, 3],
      defaultValue: props.sportLuggage || 0,
      hint: "Golf equipment, Skis, Snowboard",
      icon: iconSportLuggage
    },
    {
      id: "animals",
      range: [0, 1, 2, 3, 4],
      defaultValue: props.animals || 0,
      hint: "Small animals",
      icon: iconAnimals
    },
    {
      id: "children-seats",
      range: [0, 1, 2],
      defaultValue: props.childrenSeats || 0,
      hint: "Children seats",
      icon: iconChildren
    }
  ];

  return (
    <Wrapper>
      {moreOptions.map((el) => <Select key={el.id} {...el}/>)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  color: black;
  box-sizing: border-box;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 16px;
  @media (min-width: ${xsm}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const mapStateToProps = state => ({
  passengers: state.moreOptions.passengers,
  luggage: state.moreOptions.luggage,
  sportLuggage: state.moreOptions["sport-luggage"],
  animals: state.moreOptions.animals,
  childrenSeats: state.moreOptions["children-seats"]
});

export default connect(mapStateToProps)(MoreOptions);