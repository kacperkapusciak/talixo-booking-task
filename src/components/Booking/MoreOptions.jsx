import React from "react";
import styled from "styled-components";
import Select from "./Select";
import {xsm} from "../../utils/breakpoints";

import iconAnimals from "../../img/icon_animals.png";
import iconChildren from "../../img/icon_children.png";
import iconLuggage from "../../img/icon_luggage.png";
import iconSeats from "../../img/icon_seats.png";
import iconSportLuggage from "../../img/icon_sport_luggage.png";
import iconTime from "../../img/icon_time.png";


const moreOptions = [
  {
    id: "passangers",
    range: [...Array(8).keys()].map(i => i + 1), //[1,2,...,8]
    defaultValue: 2,
    hint: "Passengers",
    icon: iconSeats
  },
  {
    id: "luggage",
    range: [...Array(9).keys()], //[0,1,2,...,8]
    defaultValue: 2,
    hint: "max. 20kg each. 1 piece of hand luggage is included per passenger",
    icon: iconLuggage
  },
  {
    id: "sport-luggage",
    range: [0,1,2,3],
    hint: "Golf equipment, Skis, Snowboard",
    icon: iconSportLuggage
  },
  {id: "animals", range: [0,1,2,3,4], hint: "Small animals", icon: iconAnimals},
  {id: "children-seats", range: [0,1,2], hint: "Children seats", icon: iconChildren}
];


function MoreOptions() {
  return (
    <Wrapper>
      {moreOptions.map((el) => <Select key={el.id} {...el}/>)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  color: black;
  grid-template-columns: 1fr 1fr;
  @media (min-width: ${xsm}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default MoreOptions;