import React from 'react';

const Timer = props => (
  <div>
    <div id="start" onClick={props.startTimer}>
      Start
    </div>
    <div id="num">
      {props.timer}
    </div>
  </div>
);

export default Timer;
