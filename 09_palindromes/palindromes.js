const palindromes = function (word) {
  const cleanedWord = word.toLowerCase().replace(/[^a-z]/gi, '');
  const reversedWord = cleanedWord.split('').reverse().join('');
  return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
