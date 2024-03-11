import React from "react";
import GameCategoryTile from "../GameCategoryTile/GameCategoryTile";

import { Categories } from "../../models/enums/categoriesEnum";

import "./GameCategoriesWrapper.css";

const GameCategoriesWrapper = ({ turn }) => {
  return (
    <div className="game-categories-wrapper">
      {Object.keys(Categories).map((category) => (
        <React.Fragment key={category}>
          <GameCategoryTile
            key={`${category}1`}
            category={category}
            level={1}
            turn={turn}
          />
          <GameCategoryTile
            key={`${category}2`}
            category={category}
            level={2}
            turn={turn}
          />
          <GameCategoryTile
            key={`${category}3`}
            category={category}
            level={3}
            turn={turn}
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default GameCategoriesWrapper;
