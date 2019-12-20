import React from 'react';
import axios from 'axios';
import Board from './Board';
import Entry from './Entry';
import List from './List';
import letterPools from '../letterPools.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anagrams: [],
      definition: { word: 'Add 9 letters by clicking the vowel & consonant buttons above. Click Start to begin the round' },
      entry: '',
      entries: [],
      letters: ['W', 'E', 'A', 'S', 'R', 'T', 'E', 'N', 'O'],
      longest: '',
      round: 'pre',
      timer: 45,
      uniques: 0,
    };
  }

  //server requests
  getAnagrams = () => {
    const { letters } = this.state;
    const query = letters.join('').toLowerCase();

    axios.get('/anagrams', { params: { data: query } })
      .then(res => this.setState({ anagrams: res.data }));
  }

  getDefinition = e => {
    const query = e.target.textContent;

    axios.get('/definition', { params: { data: query } })
      .then(res => this.setState({
        definition: { word: res.data.word, pos: res.data.category, def: res.data.definition },
      }));
  }

  // gameboard functions
  addLetter = (e, autofill) => {
    const { letters } = this.state;

    if (letters.length < 9) {
      const pool = e.target.id === 'vowel' ? letterPools.vows : letterPools.cons;
      const letter = pool[Math.floor(Math.random() * pool.length)];
      this.setState({ letters: letters.concat(letter) }, autofill);
    }
  }

  autofill = () => {
    const type = Math.random() < .55 ? 'vowel' : 'consonant';
    this.addLetter({ target: { id: type } }, this.autofill);
  }

  // user entry functions
  handleChange = e => {
    this.setState({ entry: e.target.value });
  }

  addEntry = e => {
    const { entries, entry, round } = this.state;
    
    if (round === 'active') {
      this.setState({
        entries: [{ word: entry.toLowerCase(), class: 'entry' }].concat(entries),
        entry: '',
      });
    }

    e.preventDefault();
  }

  checkEntries = () => {
    const { anagrams } = this.state;
    let { entries } = this.state;

    entries = entries.map(entry =>
      entry.word.length > 1 && entry.word.length < 10 && anagrams[entry.word.length - 2].includes(entry.word) ?
        { class: 'correct', word: entry.word } :
        { class: 'wrong', word: entry.word });

    this.setState({ entries });
  }

  getLongest() {
    let longest = '';
  }

  countCorrectWords() {
    const uniques = new Set();
  }

  // timer functions
  tick = () => {
    const { round, timer } = this.state;
    if (timer === 0) {
      clearInterval(this.intervalHandle);
      this.checkEntries();
      this.setState({
        definition: { word: 'click a word to see its definition' },
        round: 'post',
      });
    } else { 
      this.setState({ timer: timer - 1 }); 
    }
  }

  startTimer = () => {
    const { letters, round } = this.state;
    if (round === 'pre' && letters.length === 9) {
      document.getElementById('input').focus();
      this.getAnagrams();
      this.setState({ round: 'active', definition: { pos: 'good luck' } });
      this.intervalHandle = setInterval(this.tick, 1000);
    }
  }

  reset = () => {
    clearInterval(this.intervalHandle);
    this.setState({
      round: 'pre',
      anagrams: [],
      definition: { word: 'Add 9 letters by clicking the vowel & consonant buttons above. Click Start to begin the round' },
      entries: [],
      letters: [],
      timer: 3,
    });
  }

  render() {
    const {
      anagrams, definition, entries, entry, letters, longest, round, timer, uniques,
    } = this.state;
    return (
      <div>
        <span id="stamp">
          game by
          <a href="https://www.linkedin.com/in/matt-strom/" target="_blank">Matt Strom</a>
        </span>
        <Board
          addLetter={this.addLetter}
          autofill={this.autofill}
          definition={definition}
          letters={letters}
          longest={longest}
          reset={this.reset}
          round={round}
          startTimer={this.startTimer}
          timer={timer}
          uniques={uniques}
        />
        <div id="container">
          <Entry
            addEntry={this.addEntry}
            entries={entries}
            entry={entry}
            handleChange={this.handleChange}
          />
          {round === 'post' && (
            <List
              anagrams={anagrams}
              getDefinition={this.getDefinition}
            />)}
        </div>
      </div>
    );
  }
}
export default App;
