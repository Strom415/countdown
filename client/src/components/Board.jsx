import React from 'react';
import Timer from './Timer';

const Board = props => (
  <div>
    <div id="timer">
      <Timer timer={props.timer} startTimer={props.startTimer} />
    </div>
    <div className="button" onClick={props.reset}>
      <h1>New Game</h1>
    </div>
    <table id="board">
      <tr>
        <td>{props.letters[0]}</td>
        <td>{props.letters[1]}</td>
        <td>{props.letters[2]}</td>
        <td>{props.letters[3]}</td>
        <td>{props.letters[4]}</td>
        <td>{props.letters[5]}</td>
        <td>{props.letters[6]}</td>
        <td>{props.letters[7]}</td>
        <td>{props.letters[8]}</td>
      </tr>
    </table>
    <div id="container">
      <div id="score">
        <div>
          Best Word
        </div>
        <div>
          Unique Words {props.uniques}
        </div>
      </div>
      <div className="letter">
        <h2 id="vowel" onClick={props.addVowel}>Vowel</h2 >
      </div>
      <div className="letter">
        <h2  id="consonant" onClick={props.addConsonant}>Consonant</h2 >
      </div>
    </div>
    <div id="defContainer">
      <span id="word">{props.definition.word} </span> 
      <span id="pos">{props.definition.pos} </span>
      <span id="def">{props.definition.def}</span>
    </div>
  </div>
);

export default Board;
