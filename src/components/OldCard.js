import React from "react";

const Card = ({ img, text }) => {
  return (
    <div>
      <img src={`img/${img}`} alt={text} height="auto" width="200px" />
    </div>
  );
};

export default Card;
