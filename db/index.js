const fs = require('fs');

function Dictionary(file) {
  const words = fs.readFileSync(file, 'utf8').split('\n');
  words.forEach((word) => { this[word.trim()] = 1; });
}

function findAnagrams(string) {
  const anagrams = {};

  const recurse = (ana, str) => {
    if (str === '') { anagrams[ana] = 1; }

    for (let i = 0; i < str.length; i++) {
      recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  };
  recurse('', string);

  return Object.keys(anagrams);
}

function getPowerSet(str = '') {
  const set = new Set();

  const recurse = (strSet) => {
    set.add(strSet.join(''));
    if (strSet.length === 1) { return; }

    for (let i = 0; i < strSet.length; i++) {
      const subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
      recurse(subSet);
    }
  };
  recurse(str.split(''));

  return Array.from(set);
}

function findAllAnagrams(str, dictionary, callback) {
  const matches = [];

  getPowerSet(str).forEach((subset) => {
    findAnagrams(subset).forEach((anagram) => {
      if (dictionary[anagram] === 1) { matches.push(anagram); }
    });
  });

  callback(matches);
}

module.exports.findAllAnagrams = findAllAnagrams;
module.exports.Dictionary = Dictionary;
