import React from "react";
import goodPointsImg from "../assets/score_images/correct.jpg";
import badPointsImg from "../assets/score_images/wrong.jpg";
import "../styles/score.css";

const Score = ({ badPoints, goodPoints }) => {
  return (
    <div className="score-container">
      <div className="points-div">
        <img className="points-img" src={badPointsImg} alt="bad points" />
        <p className="points">{badPoints}</p>
      </div>
      <div className="points-div">
        <img className="points-img" src={goodPointsImg} alt="good points" />
        <p className="points">{goodPoints}</p>
      </div>
    </div>
  );
};

export default Score;
