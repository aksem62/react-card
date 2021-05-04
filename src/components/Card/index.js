import React from "react";
import { CardContainer, CardContent, CardText } from "./styles";

const Card = ({ text, img }) => (
  <CardContainer>
    <CardContent img={img}>
      <CardText>
        <h2>{text}</h2>
      </CardText>
    </CardContent>
  </CardContainer>
);

export default Card;
