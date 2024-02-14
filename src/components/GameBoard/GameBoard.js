import React from "react";
import './GameBoard.css';
const GameBoard = ({
   buttonClicked,
   playerTurn,
   buttonValues,
   setButtonValues,
   player1,
   player2,
   isGameEnable
}) => {

   
   const changeButtonValue = (index) => {
      const newbuttonValues = [...buttonValues];
      newbuttonValues[index] = playerTurn === "O" ? 'O' : 'X';
      setButtonValues(newbuttonValues);
      return "";
   }

   const isButtonEnable = (val) => {
      return [player1,player2].some(player => player.includes(val));
    };
  return (
    <div className="game-outer">
      <div className="row">
        <div className="col-4 b-right b-bottom p-3 button-text" onClick={isButtonEnable(1) || !isGameEnable ? () => {} : (()=> {  changeButtonValue(0); buttonClicked(1) })}>{buttonValues[0]}</div>
        <div className="col-4 b-right b-bottom p-3 button-text" onClick={isButtonEnable(2) || !isGameEnable ? () => {} : (()=>  { buttonClicked(2); changeButtonValue(1) })}>{buttonValues[1]}</div>
        <div className="col-4 b-bottom p-3 button-text" onClick={isButtonEnable(3) || !isGameEnable ? () => {} : (()=>  { buttonClicked(3); changeButtonValue(2) })}>{buttonValues[2]}</div>
        <div className="col-4 b-right b-bottom p-3 button-text" onClick={isButtonEnable(4) || !isGameEnable ? () => {} : (()=>  { buttonClicked(4); changeButtonValue(3) })}>{buttonValues[3]}</div>
        <div className="col-4 b-right b-bottom p-3 button-text" onClick={isButtonEnable(5) || !isGameEnable ? () => {} : (()=>  { buttonClicked(5); changeButtonValue(4) })}>{buttonValues[4]}</div>
        <div className="col-4 b-bottom p-3 button-text" onClick={isButtonEnable(6) || !isGameEnable ? () => {} : (()=> { buttonClicked(6); changeButtonValue(5) })}>{buttonValues[5]}</div>
        <div className="col-4 b-right p-3 button-text" onClick={isButtonEnable(7) || !isGameEnable ? () => {} : (()=> { buttonClicked(7); changeButtonValue(6) })}>{buttonValues[6]}</div>
        <div className="col-4  b-right p-3 button-text" onClick={isButtonEnable(8) || !isGameEnable ? () => {} : (()=> { buttonClicked(8); changeButtonValue(7) })}>{buttonValues[7]}</div>
        <div className="col-4 p-3 button-text" onClick={isButtonEnable(9) || !isGameEnable ? () => {} : (()=> { buttonClicked(9); changeButtonValue(8) })}>{buttonValues[8]}</div>
      </div>
    </div>
  );
};


export default GameBoard;
