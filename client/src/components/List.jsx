import React from 'react';

const List = props => (
  <div id="list" className="column">
    <h1 onClick={props.getAnagrams}>Get Anagrams</h1>
    <div id="words">
      {props.anagrams.map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
    </div>
  </div>
);

export default List;