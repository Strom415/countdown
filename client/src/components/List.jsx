import React from 'react';

const List = props => (
  <div id="list">
    <div id="words">
      {props.anagrams.map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
    </div>
  </div>
);

export default List;