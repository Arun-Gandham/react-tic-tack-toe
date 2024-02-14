import "./PlayersMenu.css";

const PlayersMenu = ({ playerTurn, playerTurnState }) => {
  return (
    <div className="text-center">
      <div className="text-center">
        <h1>Tic Tac Toe</h1>
      </div>
      <div className="d-flex justify-content-center my-3">
        <div className={`${playerTurn === "O" ? "selected" : ""}  mx-5`}>
          <p className="player-buttons">Player 1 (O)</p>
        </div>
        <div
          className={`${
            playerTurn === "X" ? "selected" : ""
          } player-buttons mx-5`}
        >
          Player 2 (X)
        </div>
      </div>
    </div>
  );
};

export default PlayersMenu;
