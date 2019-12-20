const fs = require('fs');

function Dictionary(file) {
  const words = fs.readFileSync(file, 'utf8').split('\n');
  words.forEach((word) => this[word.trim()] = 1);
}

const  findAnagrams = string => {
  const anagrams = new Set();

  const recurse = (ana, str) => {
    if (ana.length > 1) anagrams.add(ana);

    for (let i = 0; i < str.length; i++) {
      recurse(ana + str[i], str.slice(0, i) + str.slice(i + 1));
    }
  };

  recurse('', string);

  return Array.from(anagrams);
};

const sortAnagrams = anagrams => {
  const sorted = [];

  for (let i = 0; i < 9; i++) { 
    sorted.push([]); 
  }

  anagrams.forEach(anagram => sorted[anagram.length - 2].push(anagram));
  sorted.map(partition => partition.sort());

  return sorted;
};

const findEnglishAnagrams = (letters, dictionary, callback) => {
  const anagrams = findAnagrams(letters);
  const englishAnagrams = anagrams.filter(sequence => dictionary[sequence]);
  callback(sortAnagrams(englishAnagrams));
};
  
module.exports.findEnglishAnagrams = findEnglishAnagrams;
module.exports.Dictionary = Dictionary;
