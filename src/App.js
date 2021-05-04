import React from "react";
import Card from "./components/Card/index";
import { Parallax } from "./components/styled";
import { createGlobalStyle } from "styled-components";
import { v4 as uuidv4 } from "uuid";

const cards = [
  {
    text: "Some text about stoves",
    img: "acclaim.jpg",
  },
  {
    text: "Some text here",
    img: "aspen.jpg",
  },
  {
    text: "Some numeric data and price",
    img: "barbara.jpg",
  },
  {
    text: "Some",
    img: "bav1.jpg",
  },
  {
    text: "Some",
    img: "catania.jpg",
  },
  {
    text: "Some",
    img: "catania2.jpg",
  },
  {
    text: "Some",
    img: "defiant.jpg",
  },
  {
    text: "Some",
    img: "guca.jpg",
  },
  {
    text: "Some",
    img: "iskra.jpg",
  },
  {
    text: "Some",
    img: "kost2.jpg",
  },
  {
    text: "Some",
    img: "kostr1.jpg",
  },
  {
    text: "Some",
    img: "med01.jpg",
  },
  {
    text: "Some",
    img: "med2.jpg",
  },
  {
    text: "Some",
    img: "provans.jpg",
  },
  {
    text: "Some",
    img: "provans2.jpg",
  },
];

const GlobalStyle = createGlobalStyle`
html, body {
  padding: 0;
  margin: 0;
}
* {
  box-sizing: border-box;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Parallax>
        {cards.map((card) => (
          <Card key={uuidv4()} img={card.img} text={card.text} />
        ))}
      </Parallax>
    </>
  );
};

export default App;
