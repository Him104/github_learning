import fs from 'fs';
import http from 'http';



http.createServer((req, res) => {
    //1: Read File using fs Module
    // fs.readFile('demofile1.html', function (err, data) {
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write(data);
    //     return res.end();


    // });

    //2: Create File

    // fs.writeFile('demofile3.html', 'Hi This is New Crated File in Node js Core Module', function(err){
    // if (err) throw err;
    // res.write(console.log("New File has been created"));
    // return res.end();
    // });

    //3 Update File
    // fs.appendFile('demofile3.html', 'Hi This is New Updated', function(err){

    //     if (err) throw err;
    //     res.writeHead(200, { 'Content-Type': 'text/html' });
    //     res.write("<h2>File has been updayted</h2>");
    //     return res.end();
    //     });


         //4 Delete file
    fs.unlink('demofile3.html', function(err){

        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write("<h2>File has been detated</h2>");
        return res.end();
        });

}).listen(8080);





