import express from 'express';
import path from 'path';

import bodyParser from 'body-parser';

const __dirname = path.resolve();
const publicPath = path.join(__dirname, 'public');

let app = express();
app.get('/', (req,res)=>{
res.sendFile(publicPath + '/index.html');
});

app.get('/about', (req,res)=>{
    res.sendFile(publicPath + '/about.html');
    });

    app.get('/bmi', (req,res)=>{
        res.sendFile(publicPath + '/bmi.html');  });

    app.get('*', (req,res)=>{
        res.sendFile(publicPath + '/notfound.html');
        
        
        });
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/bmical', (req,res)=>{

    let weight = req.body.weight;
    let height = req.body.height;
    let result = weight/height;


    res.send(`Your BMI is = ${result}`);




});

//app.use(express.static(publicPath));

app.listen(5000);