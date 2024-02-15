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
        <div className="col-4 b-right b-bottom  button-text" onClick={isButtonEnable(1) || !isGameEnable ? () => {} : (()=> {  changeButtonValue(0); buttonClicked(1) })}><p>{buttonValues[0]}</p></div>
        <div className="col-4 b-right b-bottom  button-text" onClick={isButtonEnable(2) || !isGameEnable ? () => {} : (()=>  { buttonClicked(2); changeButtonValue(1) })}><p>{buttonValues[1]}</p></div>
        <div className="col-4 b-bottom  button-text" onClick={isButtonEnable(3) || !isGameEnable ? () => {} : (()=>  { buttonClicked(3); changeButtonValue(2) })}><p>{buttonValues[2]}</p></div>
        <div className="col-4 b-right b-bottom  button-text" onClick={isButtonEnable(4) || !isGameEnable ? () => {} : (()=>  { buttonClicked(4); changeButtonValue(3) })}><p>{buttonValues[3]}</p></div>
        <div className="col-4 b-right b-bottom  button-text" onClick={isButtonEnable(5) || !isGameEnable ? () => {} : (()=>  { buttonClicked(5); changeButtonValue(4) })}><p>{buttonValues[4]}</p></div>
        <div className="col-4 b-bottom  button-text" onClick={isButtonEnable(6) || !isGameEnable ? () => {} : (()=> { buttonClicked(6); changeButtonValue(5) })}><p>{buttonValues[5]}</p></div>
        <div className="col-4 b-right  button-text" onClick={isButtonEnable(7) || !isGameEnable ? () => {} : (()=> { buttonClicked(7); changeButtonValue(6) })}><p>{buttonValues[6]}</p></div>
        <div className="col-4  b-right  button-text" onClick={isButtonEnable(8) || !isGameEnable ? () => {} : (()=> { buttonClicked(8); changeButtonValue(7) })}><p>{buttonValues[7]}</p></div>
        <div className="col-4  button-text" onClick={isButtonEnable(9) || !isGameEnable ? () => {} : (()=> { buttonClicked(9); changeButtonValue(8) })}><p>{buttonValues[8]}</p></div>
      </div>
    </div>
  );
};


export default GameBoard;
