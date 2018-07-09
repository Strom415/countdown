import React from 'react';

const Timer = props => (
  <div>
    <div onClick={props.startTimer}>
      Start
    </div>
    <div>
      {props.timer}
    </div>
  </div>
)

export default Timer;
