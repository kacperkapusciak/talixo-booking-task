import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { accent } from "../../utils/colors";
import { xsm, md, lg } from "../../utils/breakpoints";

function Recommendation({offer}) {
  return (
    <Grid>
      <PriceContainer>
        <PriceTag>€&nbsp;1088.59</PriceTag>
        <Button to="/details-and-payment">{`Book ${offer.title}`}</Button>
      </PriceContainer>
      <ImgContainer>
        <Img src={offer.picture} alt={`${offer.title} picture`}/>
      </ImgContainer>
      <InfoContainer>
        <Title>{offer.title}</Title>
        <Details>
          <div>
            <Subtitle>Example cars</Subtitle>
            <List>
              {offer.exampleCars.map((el,i) => <li key={el+i}>{el}</li>)}
            </List>
          </div>
          <div>
            <Subtitle>Features</Subtitle>
            <List>
              {offer.features.map((el,i) => <li key={el+i}>{el}</li>)}
            </List>
          </div>
        </Details>
      </InfoContainer>
    </Grid>
  );
}

const Grid = styled.div`
  display: grid;
  @media (min-width: ${md}) {
    grid-template-columns: 275px 1fr 220px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  background: #f5f5f5;
  justify-content: space-between;
  padding: 8px;
  @media (min-width: ${md}) { 
    order: 2;
  }
  @media (min-width: ${md}) { 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 250px;
  }
`;

const PriceTag = styled.span`
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -0.5px;
  line-height: 45px;
  float: left;
  @media (min-width: ${md}) {
    font-size: 34px;
    margin-bottom: 10px;  
  }
`;

const Button = styled(Link)`
  background-color: ${accent};
  border: 4px;
  color: white;
  cursor: pointer;
  margin: 0;
  text-align: center;
  box-shadow: 0 5px 20px rgba(255, 72, 0, 0.3);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.25px;
  transition: background-color 0.3s ease-in-out;
  position: static;
  border-radius: 45px;
  height: 45px;
  line-height: 45px;
  padding: 0 20px;
  width: auto;
  &:hover {
    color: white;
  }
`;

const Img = styled.img`
  height: auto;
  margin-left: 0;
  max-width: 275px;
  width: 100%;
`;

const ImgContainer = styled.div`
  align-self: center;
  text-align: center;
  padding: 0;
  position: relative;
  width: 100%;
`;

const Title = styled.h3`
  text-align: center;
  font-size: 30px;
  font-weight: 300;
  font-family: "Open Sans";
  letter-spacing: -0.5px;
  line-height: 1;
  margin-bottom: 20px;
  padding: 0;
  @media (min-width: ${md}) {
    text-align: left;
  }
`;

const Subtitle = styled.h4`
  color: #adadad;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  li {
    margin-bottom: 8px;
  }
`;

const InfoContainer = styled.div``;

const Details = styled.div`
  display: grid;
  @media (min-width: ${xsm}) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: ${md}) {
    grid-template-columns: 1fr;
  }
  @media (min-width: ${lg}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default Recommendation;