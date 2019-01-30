import PropTypes from 'prop-types';
import React from 'react';

const Scoreboard = ({ longest, uniques }) => (
  <div id="score">
    <div>
      Best Word:
      <span className="best">
        {longest}
      </span>
    </div>
    <div>
      {longest.length} letters
      <span className="best">!</span>
    </div>
    <div>
      Unique Words:
      <span className="best">
        {uniques}
      </span>
    </div>
  </div>
);

Scoreboard.propTypes = {
  longest: PropTypes.string.isRequired,
  uniques: PropTypes.number.isRequired,
};
export default Scoreboard;
