import React from 'react';

const List = props => (
  <div>
  <div id="list" className="column">
    <div id="words">
      {props.anagrams.filter(word => word.length === 9).length > 0 && <div className="listCol">9
          {props.anagrams
            .filter(word => word.length === 9)
            .map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
      </div>}
      {props.anagrams.filter(word => word.length === 8).length > 0 && <div className="listCol">8
        {props.anagrams
          .filter(word => word.length === 8)
          .map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
      </div>}
      {props.anagrams.filter(word => word.length === 7).length > 0 && <div className="listCol">7
        {props.anagrams
          .filter(word => word.length === 7)
          .map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
      </div>}
      {props.anagrams.filter(word => word.length === 6).length > 0 && <div className="listCol">6
        {props.anagrams
          .filter(word => word.length === 6)
          .map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
      </div>}
      {props.anagrams.filter(word => word.length === 5).length > 0 && <div className="listCol">5
        {props.anagrams
          .filter(word => word.length === 5)
          .map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
      </div>}
      {props.anagrams.filter(word => word.length === 4).length > 0 && <div className="listCol">4
        {props.anagrams
          .filter(word => word.length === 4)
          .map(word => <div className="anagram" onClick={props.getDefinition}>{word}
          </div>)}
      </div>}
      {props.anagrams.filter(word => word.length === 3).length > 0 && <div className="listCol">3
        {props.anagrams
          .filter(word => word.length === 3)
          .map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
      </div>}
      {props.anagrams.filter(word => word.length === 2).length > 0 && <div className="listCol">2
        {props.anagrams
          .filter(word => word.length === 2)
          .map(word => <div className="anagram" onClick={props.getDefinition}>{word}</div>)}
      </div>}
    </div>
  </div>
  </div>
);

export default List;
