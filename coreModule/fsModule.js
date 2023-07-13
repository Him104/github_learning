import fs from 'fs';

// 1: create a file using fs Module

fs.writeFile('test1.txt', 'Hello this writeFile fs Method', function (err) {
    if (err) throw err;
    console.log("New File has been created from writeFile method from fs Module")
});

//2: 