function getShortWords(words, maxLength) {
  let results = [];
  
  for (const word of words) {
    if (word.length <= maxLength) {
      results.push(word);
    }
  }
  
  return results;
}

const text = 'one two three four five';
const words = text.split(' ');

console.log(
  getShortWords(words, 4) // Filters words with 4 or fewer characters
);
