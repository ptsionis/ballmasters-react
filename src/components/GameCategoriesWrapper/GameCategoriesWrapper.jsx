import React from "react";
import GameCategoryTile from "../GameCategoryTile/GameCategoryTile";

import { Categories } from "../../models/enums/categoriesEnum";

import "./GameCategoriesWrapper.css";

const GameCategoriesWrapper = ({ turn }) => {
  return (
    <div className="game-categories-wrapper">
      {Object.keys(Categories).map((category) => (
        <>
          <GameCategoryTile
            key={`${category}1`}
            category={category}
            level={1}
          />
          <GameCategoryTile
            key={`${category}2`}
            category={category}
            level={2}
          />
          <GameCategoryTile
            key={`${category}3`}
            category={category}
            level={3}
          />
        </>
      ))}
    </div>
  );
};

export default GameCategoriesWrapper;
