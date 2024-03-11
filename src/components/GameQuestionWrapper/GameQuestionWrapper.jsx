import React from "react";

import "./GameQuestionWrapper.css";

const GameQuestionWrapper = ({ question }) => {
  return (
    <div className="game-question-wrapper">
      <span className="game-question-head">{`${question.category.toUpperCase()} X${
        question.level
      }`}</span>
      <span className="game-question">{question.question}</span>
    </div>
  );
};

export default GameQuestionWrapper;
