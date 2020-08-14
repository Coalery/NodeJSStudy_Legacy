var fs = require('fs');

fs.readFile('_007/sample.txt', 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
})