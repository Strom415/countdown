import React from 'react';
import Timer from './Timer';

const Board = props => (
  <div>
    <div id="timer">
      <Timer timer={props.timer} startTimer={props.startTimer} />
    </div>
    <div className="button" onClick={props.reset}>
      <h1>
        New Game
      </h1>
    </div>
    <table id="board">
      <tr>
        {['', '', '', '', '', '', '', '', ''].map((letter, i) => <td>{props.letters[i]}</td>)}
      </tr>
    </table>
    <div id="container">
      {props.round === 'post' && (
        <div id="score">
          <div>
            Best Word:
            <span className="best">
              {props.longest}
            </span>
          </div>
          <div>
            Unique Words:
            <span className="best">
              {props.uniques}
            </span>
          </div>
        </div>)}
      <div className="letter">
        <h2 id="vowel" onClick={props.addVowel}>
          Vowel
        </h2>
      </div>
      <div className="letter">
        <h2  id="consonant" onClick={props.addConsonant}>
          Consonant
        </h2>
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
