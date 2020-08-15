var testFolder = './_011/data';
var fs = require('fs');

fs.readdir(testFolder, (err, filelist) => {
    if(err) throw err;
    console.log(filelist);
});