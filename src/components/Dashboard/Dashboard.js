import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PlayersMenu from "../PlayersMenu/PlayersMenu";
import "./Dashboard.css";
import GameBoard from "../GameBoard/GameBoard";
const Dashboard = () => {
  const [playerTurn, playerTurnState] = useState("O");
  const possibleWinPatterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const [player1, setPlayer1] = useState([]);
  const [player2, setPlayer2] = useState([]);
  const buttonClicked = (num) => {
    playerTurnState(playerTurn === "O" ? "X" : "O");
    if (playerTurn === "O") {
      setPlayer1([...player1, num]);
    } else {
      setPlayer2([...player2, num]);
    }
  };

  useEffect(() => {
    if (hasWinningPattern(player1)) {
      setStatus("Player 1 win");
      setisGameEnable(false);
    }
    if (hasWinningPattern(player2)) {
      setStatus("Player 2 win");
      setisGameEnable(false);
    }
  }, [player1, player2]); // This effect runs when player1 changes
  const buttonDefaultState = Array(9).fill("\u00A0");
  const [buttonValues, setButtonValues] = useState(buttonDefaultState);
  const [isGameEnable, setisGameEnable] = useState(true);
  const resetGame = () => {
    setButtonValues(buttonDefaultState);
    playerTurnState("O");
    setPlayer1([]);
    setPlayer2([]);
    setStatus("");
    setisGameEnable(true);
  };
  const [status, setStatus] = useState("");
  const hasWinningPattern = (win) => {
    return possibleWinPatterns.some((pattern) => {
      return pattern.every((element) => win.includes(element));
    });
  };
  return (
    <div className="outer">
      <div className="container p-3">
        <div className="p-3 con-inner">
          <PlayersMenu
            playerTurn={playerTurn}
            playerTurnState={playerTurnState}
          />

          <div className="text-center">
            <button className="btn btn-primary" onClick={resetGame}>
              Restart
            </button>
            <h1>{status}</h1>
          </div>

          <div className="game-board text-center">
            <GameBoard
              buttonClicked={buttonClicked}
              playerTurn={playerTurn}
              player1={player1}
              player2={player2}
              buttonValues={buttonValues}
              setButtonValues={setButtonValues}
              isGameEnable={isGameEnable}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;