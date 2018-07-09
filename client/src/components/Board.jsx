import React from 'react';

const Board = props => (
  <div>
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
      <div className="letter">
        <h2  id="vowel" onClick={props.addVowel}>Vowel</h2 >
      </div>
      <div className="letter">
        <h2  id="consonant" onClick={props.addConsonant}>Consonant</h2 >
      </div>
    </div>
    
  </div>
);

export default Board;
