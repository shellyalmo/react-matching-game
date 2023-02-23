import React from "react";

const CharacterCard = ({ img, desc }) => {
  return (
    <div>
      <img src={img} alt="celebrity" />
      <p>{desc}</p>
    </div>
  );
};

export default CharacterCard;
