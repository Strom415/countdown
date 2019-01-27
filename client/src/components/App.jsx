import React from 'react';
import axios from 'axios';
import Board from './Board';
import Entry from './Entry';
import List from './List';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anagrams: [],
      definition: { word: 'Add 9 letters by clicking the vowel & consonant buttons above. Click Start to begin the round' },
      entry: '',
      entries: [],
      letters: [],
      longest: '',
      max: 0,
      round: 'pre',
      showList: false,
      timer: 15,
      uniques: 0,
    };

    this.addConsonant = this.addConsonant.bind(this);
    this.addEntry = this.addEntry.bind(this);
    this.addVowel = this.addVowel.bind(this);
    this.getAnagrams = this.getAnagrams.bind(this);
    this.getDefinition = this.getDefinition.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.reset = this.reset.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  getAnagrams() {
    const query = this.state.letters.join('').toLowerCase();
    axios.get('/anagrams', { params: { data: query } }).then((res) => {
      this.setState({ anagrams: res.data });
    });
  }

  getDefinition(e) {
    const query = e.target.textContent;
    axios.get('/definition', { params: { data: query } }).then((res) => {
      this.setState({
        definition: { word: res.data.word, pos: res.data.category, def: res.data.definition },
      });
    });
  }

  addEntry(e) {
    if (this.state.round === 'active') {
      this.setState({
        entries: [{ word: this.state.entry.toLowerCase(), class: 'entry' }].concat(this.state.entries),
        entry: '',
      });
    }
    e.preventDefault();
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ entry: e.target.value });
  }

  addVowel() {
    const vows = ['A', 'A', 'A', 'A', 'A', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'I', 'I', 'I', 'I', 'O', 'O', 'O', 'O', 'U', 'U'];
    const num = Math.floor(Math.random() * 23);
    if (this.state.letters.length < 9) {
      this.setState({ letters: this.state.letters.concat(vows[num]) });
    }
  }

  addConsonant() {
    const cons = ['B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'J', 'K', 'K', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'T', 'V', 'V', 'V', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'X', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Z'];
    const num = Math.floor(Math.random() * 270);
    if (this.state.letters.length < 9) {
      this.setState({ letters: this.state.letters.concat(cons[num]) });
    }
  }

  reset() {
    this.setState({
      round: 'pre',
      anagrams: [],
      definition: { word: 'Add 9 letters by clicking the vowel & consonant buttons above. Click Start to begin the round' },
      entries: [],
      letters: [],
      timer: 45,
      showList: false,
    });
  }

  tick() {
    if (this.state.timer === 0) {
      clearInterval(this.intervalHandle);
      this.checkEntries();
      this.setState({
        definition: { word: 'click a word for its definition' },
        round: 'post',
        showList: true,
      });
      return;
    }
    this.setState({ timer: this.state.timer - 1 });
  }

  startTimer() {
    if (this.state.round === 'pre' && this.state.letters.length === 9) {
      this.getAnagrams();
      document.getElementById('input').focus();
      this.setState({ round: 'active', definition: { pos: 'good luck' } });

      this.intervalHandle = setInterval(this.tick, 1000);
    }
  }

  checkEntries() {
    const { entries } = this.state;
    const set = new Set();
    let longest = '';

    entries.forEach((entry) => {
      if (this.state.anagrams.includes(entry.word)) {
        set.add(entry.word);
        entry.class = 'correct';
        if (entry.word.length > longest.length) { longest = entry.word; }
      } else {
        entry.class = 'wrong';
      }
    });

    this.setState({
      entries, longest, max: longest.length, uniques: set.size,
    });
  }

  render() {
    return (
      <div>
        <Board
          addVowel={this.addVowel}
          addConsonant={this.addConsonant}
          reset={this.reset}
          letters={this.state.letters}
          timer={this.state.timer} startTimer={this.startTimer}
          definition={this.state.definition}
          uniques={this.state.uniques}
          longest={this.state.longest}
          max={this.state.max}
          round={this.state.round}
        />
        <div id="container">
          <Entry
            entry={this.state.entry}
            entries={this.state.entries}
            addEntry={this.addEntry}
            handleChange={this.handleChange}
            focus={this.state.focus}
          />
            { this.state.showList && <List
              anagrams={this.state.anagrams}
              getDefinition={this.getDefinition}
              getAnagrams={this.getAnagrams}
              showList={this.state}
            />}
        </div>
      </div>
    );
  }
}
//['wordworth', 'warpathe', 'wrapper', 'willow', 'winow', 'trow', 'pow', 'ew']
export default App;
