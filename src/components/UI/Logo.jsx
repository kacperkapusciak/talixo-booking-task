import React from "react";
import styled from "styled-components";
import logo from "../../img/talixo_logo_2x.png";

export default () => (
  <Img src={logo} alt="talixo logo"/>
);

const Img = styled.img`
  height: 22px;
  width: 123px;
  margin-top: 7px;
`;