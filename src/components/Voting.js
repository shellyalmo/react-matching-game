import React from "react";

import "../styles/voting.css";

const Voting = ({
  goodPoints,
  badPoints,
  setGoodPoints,
  setBadPoints,
  setCurrentCelebrityIndex,
  setCurrentCelebrity,
  currentCelebrity,
  currentCelebrityIndex,
  celebrities,
}) => {
  const checkVote = (guessFromUser) => {
    if (
      currentCelebrity.correctAnswer.toString() === guessFromUser.toLowerCase()
    ) {
      setGoodPoints(() => goodPoints + 1);
    } else {
      setBadPoints(() => badPoints + 1);
    }
  };

  const showNextCelebrity = () => {
    const nextCelebrityIndex = currentCelebrityIndex + 1;
    if (nextCelebrityIndex < celebrities.length) {
      setCurrentCelebrityIndex(() => nextCelebrityIndex);
      setCurrentCelebrity(celebrities[nextCelebrityIndex]);
    }
  };

  const voteHandler = (e) => {
    const guess = e.target.textContent;
    checkVote(guess);
    if (currentCelebrityIndex < celebrities.length) {
      showNextCelebrity();
    }
  };

  return goodPoints + badPoints < celebrities.length ? (
    <div className="voting-container">
      <button onClick={voteHandler} className="false-btn">
        False
      </button>
      <button onClick={voteHandler} className="true-btn">
        True
      </button>
    </div>
  ) : (
    <div>
      <h2>Game Over!</h2>
      <p>You {goodPoints > badPoints ? "Won!" : "Lost!"}</p>
    </div>
  );
};

export default Voting;
