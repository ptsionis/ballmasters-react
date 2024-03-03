import React, { useEffect, useContext, useState } from "react";
import GamePlayer from "../components/GamePlayer/GamePlayer";
import { AppContext } from "../App";

import "./GamePage.css";
import Loader from "../components/Loader/Loader";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import GameCategoriesWrapper from "../components/GameCategoriesWrapper/GameCategoriesWrapper";

const GamePage = () => {
  const { user, gameRoom, setCurrentPage, socket } = useContext(AppContext);
  const [opponent, setOpponent] = useState(null);

  useEffect(() => {
    socket.emit("get_opponent_info", gameRoom);
  }, []);

  socket.on("set_opponent_info", (opponent) => {
    setOpponent(opponent);
  });

  socket.on("opponent_quit", () => {
    setCurrentPage("/");
  });

  if (!opponent) {
    return <Loader />;
  }

  return (
    <main className="game-main">
      <div className="game-header">
        <GamePlayer player={user} isOpponent={false} />
        <Scoreboard scoreMe={0} scoreOpponent={0} />
        <GamePlayer player={opponent} isOpponent={true} />
      </div>
      <div className="game-wrapper">
        <GameCategoriesWrapper />
      </div>
    </main>
  );
};

export default GamePage;
