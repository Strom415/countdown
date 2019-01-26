import React from 'react';

const Timer = props => (
  <div onClick={props.startTimer}>
    <div id="start">
      Start
    </div>
    <div id="num">
      {props.timer}
    </div>
  </div>
);

export default Timer;
