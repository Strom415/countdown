import PropTypes from 'prop-types';
import React from 'react';
import Scoreboard from './Scoreboard';
import Timer from './Timer';

const Board = ({
  addLetter, definition, letters, longest, timer, reset, round, startTimer, uniques,
}) => (
  <div>
    <div id="timer">
      <Timer timer={timer} startTimer={startTimer} />
    </div>
    <div
      className="button"
      onClick={reset}
      onKeyDown={reset}
      role="button"
      tabIndex={0}
    >
      <h1>
        New Game
      </h1>
    </div>
    <table id="board">
      <tr>
        {['', '', '', '', '', '', '', '', ''].map((letter, i) => (
          <td>
            {letters[i]}
          </td>))}
      </tr>
    </table>
    <div id="container">
      { round === 'post' && <Scoreboard longest={longest} uniques={uniques} /> }
      <div className="letterButtonContainer">
        <h2 className="letterButton" id="vowel" onClick={addLetter} onKeyPress={addLetter}>
          Vowel
        </h2>
      </div>
      <div className="letterButtonContainer">
        <h2  className="letterButton" id="consonant" onClick={addLetter} onKeyPress={addLetter}>
          Consonant
        </h2>
      </div>
    </div>
    <div id="defContainer">
      <span id="word">{definition.word} </span>
      <span id="pos">{definition.pos} </span>
      <span id="def">{definition.def}</span>
    </div>
  </div>
);

Board.propTypes = {
  addLetter: PropTypes.func.isRequired,
  definition: PropTypes.objectOf(PropTypes.string).isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  longest: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired,
  reset: PropTypes.func.isRequired,
  round: PropTypes.string.isRequired,
  startTimer: PropTypes.func.isRequired,
  uniques: PropTypes.number.isRequired,
};
export default Board;
