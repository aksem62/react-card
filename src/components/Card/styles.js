import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  background: transparent;
  position: relative;
  height: 650px;
  border: 2px solid white;
`;

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 2rem;
  background-color: white;
  height: 500px;
  width: 600px;
  cursor: pointer;
  background: url(${({ img }) => `img/${img}`});
  background-size: contain;
  background-repeat: no-repeat;
  &:hover {
    border: 2px solid white;
  }
`;

export const CardText = styled.div`
  grid-column: 4/5;
  padding: 5px;
  background-color: rgb(255, 0, 0, 0.9);
  color: white;
  text-align: center;
  opacity: 0.8;
  h1 {
    font-size: 32px;
  }
`;
