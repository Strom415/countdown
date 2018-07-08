const fs = require("fs");

const makeDictionary = (file) => {
  const dictionary = {};
  let words = fs.readFileSync(file);
  words = (words + '').split('\n');
  words = words.map(word => word.trim());

  for (let i = 0; i < words.length; i++) {
    dictionary[words[i]] = true;
  }
  return dictionary;
};

const allAnagrams = (string) => {
  const uniqueOutput = {};

  const anagram = (ana, str) => {
    if (str === '') { uniqueOutput[ana] = 1; }

    for (let i = 0; i < str.length; i++) {
      anagram(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  };

  anagram('', string);

  return Object.keys(uniqueOutput);
};

const powerSet = (str) => {
  const set = [];
  const hash = {};
  if (!str) { str = ''; }
  str = str.split('').sort();

  // recursive through the sub sets
  const recurse = (strSet) => {
    const joined = strSet.join('');

    // check if we have visited this combo
    if (hash[joined]) { return; }
    hash[joined] = true;
    set.push(joined);

    // don't recurse to empty set - add it once at the end
    if (strSet.length === 1) { return; }

    // recurse all subsets
    for (let i = 0; i < strSet.length; i++) {
      const subSet = strSet.slice(0, i).concat(strSet.slice(i + 1));
      recurse(subSet);
    }
  };
  recurse(str);

  return set;
};

const anagrams = (str, dictionary, callback) => {
  const matches = [];
  const pSet = powerSet(str);

  for (let i = 0; i < pSet.length; i++) {
    const current = allAnagrams(pSet[i]);

    for (let j = 0; j < current.length; j++) {
      if (dictionary[current[j]]) {
        matches.push(current[j]);
      }
    }
  }

  callback(matches.sort((a, b) => b.length - a.length));
};

module.exports.anagrams = anagrams;
module.exports.makeDictionary = makeDictionary;
