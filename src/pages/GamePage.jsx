import React, { useEffect, useContext, useState } from "react";
import GamePlayer from "../components/GamePlayer/GamePlayer";
import { AppContext } from "../App";
import { Stages } from "../models/enums/stagesEnum";

import "./GamePage.css";
import Loader from "../components/Loader/Loader";
import Scoreboard from "../components/Scoreboard/Scoreboard";
import GameCategoriesWrapper from "../components/GameCategoriesWrapper/GameCategoriesWrapper";
import GameQuestionWrapper from "../components/GameQuestionWrapper/GameQuestionWrapper";

const GamePage = () => {
  const { user, gameRoom, setCurrentPage, socket } = useContext(AppContext);
  const [opponent, setOpponent] = useState(null);
  const [turn, setTurn] = useState(null);
  const [stage, setStage] = useState(Stages.SELECTION);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    socket.emit("game_init_info", gameRoom);
  }, []);

  socket.on("set_game_init_info", (opponent, turn) => {
    setOpponent(opponent);
    setTurn(turn);
  });

  socket.on("set_question", (question) => {
    setStage(Stages.QUESTION);
    setQuestion(question);
  });

  socket.on("opponent_quit", () => {
    setCurrentPage("/");
  });

  if (!opponent || !turn) {
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
        <span className="game-turn">
          {turn === socket.id ? "Playing!" : "Waiting..."}
        </span>
        {stage === Stages.SELECTION ? (
          <GameCategoriesWrapper turn={turn} />
        ) : (
          <GameQuestionWrapper question={question} />
        )}
      </div>
    </main>
  );
};

export default GamePage;
