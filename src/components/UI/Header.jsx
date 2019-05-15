import React from "react";
import styled from "styled-components";
import {primary} from "../../utils/colors";
import {lg} from "../../utils/breakpoints";
import Logo from "./Logo";

function Header() {
  return (
    <Wrapper>
      <div>
        <Logo/>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 36px;
  padding: 0 8px;
  width: 100%;
  background: ${primary};
  
  @media (min-width: ${lg} ) {
    div {
      margin: 0 auto;
      padding: 0 20px;
      width: 980px;
    }
  }
`;

export default Header;