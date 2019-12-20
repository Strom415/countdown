import PropTypes from 'prop-types';
import React from 'react';

const List = ({ anagrams, getDefinition }) => (
  <div id="list" className="column">
    <div id="words">
      { anagrams.map((column, i) => {
        if (column.length > 0) {
          return (
            <div className="listCol">
              {i + 2}
              { column.map(word => (
                <div
                  className="anagram"
                  onClick={getDefinition}
                  onKeyDown={getDefinition}
                  role="button"
                  tabIndex={0}
                >
                  {word}
                </div>)) }
            </div>
          );
        } return null;
      }) }
    </div>
  </div>
);

List.propTypes = {
  anagrams: PropTypes.arrayOf(PropTypes.strings).isRequired,
  getDefinition: PropTypes.func.isRequired,
};
export default List;
