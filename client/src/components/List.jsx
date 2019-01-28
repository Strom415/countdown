import PropTypes from 'prop-types';
import React from 'react';

const sortAnagrams = (anagrams) => {
  const sorted = [];
  for (let i = 0; i < 9; i++) { sorted.push([]); }
  anagrams.forEach(anagram => sorted[anagram.length - 1].push(anagram));
  return sorted;
};

const List = ({ anagrams, getDefinition }) => (
  <div id="list" className="column">
    <div id="words">
      { sortAnagrams(anagrams).map((column, i) => {
        if (column.length > 0) {
          return (
            <div className="listCol">
              {i}
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
