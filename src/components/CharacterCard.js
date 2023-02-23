import React from "react";
import "../styles/characterCard.css";

const CharacterCard = ({ img, desc }) => {
  return (
    <div>
      <img className="celeb-img" src={img} alt="celebrity" />
      <p style={{ fontSize: "2rem" }}>{desc}</p>
    </div>
  );
};

export default CharacterCard;
