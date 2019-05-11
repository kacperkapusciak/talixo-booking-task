import React from "react";
import styled from "styled-components";

function Container({bg, children}) {
  return (
    <Wrapper background={bg}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 980px;
  margin: 0 auto;
  background: ${props => props.background};
`;

export default Container;