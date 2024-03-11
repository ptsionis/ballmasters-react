import React, { useContext } from "react";

import "./GameCategoryTile.css";
import { AppContext } from "../../App";

const GameCategoryTile = ({ category, level }) => {
  const { socket, gameRoom } = useContext(AppContext);
  const getQuestion = () => {
    console.log(category, level);
    socket.emit("get_question", gameRoom, category, level);
  };

  return (
    <button className="game-category-tile" onClick={getQuestion}>
      {category} x{level}
    </button>
  );
};

export default GameCategoryTile;
