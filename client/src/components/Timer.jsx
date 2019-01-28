import PropTypes from 'prop-types';
import React from 'react';

const Timer = ({ startTimer, timer }) => (
  <div onClick={startTimer} onKeyDown={startTimer} role="button" tabIndex={0}>
    <div id="start">
      Start
    </div>
    <div id="num">
      {timer}
    </div>
  </div>
);

Timer.propTypes = {
  startTimer: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
};
export default Timer;
