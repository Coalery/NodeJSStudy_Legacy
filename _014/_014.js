var fs = require('fs');

console.log('A');
var result = fs.readFileSync('_014/sample.txt', 'utf8');
console.log(result);
console.log('C');

console.log('A');
fs.readFile('_014/sample.txt', 'utf8', (err, result) => {
    console.log(result);
});
console.log('C');