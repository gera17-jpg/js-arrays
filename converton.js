const text = 'one two three four five';
const chars = text.split('');

console.log(chars); // ['o', 'n', 'e', ..., 'f', 'i', 'v', 'e']



const text = 'one two three four five';
const words = text.split(' ');

console.log(words); // ['one', 'two', 'three', 'four', 'five']



const text = 'one two three four five';
const words = text.split(' f');

console.log(words); // ['one two three', 'our', 'ive']                  
