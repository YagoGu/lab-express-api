const express = require("express");

const app = express();

const data = require('./api/data.json')

app.listen(3000, ()=>{
    console.log("Express server running");
})

app.get('/api/all', (req, res) => {
    res.send(data);
});

app.get('/api/random', (req, res) => {
    let random = Math.floor(Math.random()*data.length)
    res.send(data[random]);
});

app.get('/api/:id', (req, res) => {
    const id = req.params.id;
    res.send(data[id]);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/form.html")
});

//allows us to see things of our body page
const bodyParser = require('body-parser'); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/post', (req, res) => {
    const newPerson = {
        "id" : data.length+1,
        "name" : req.body.name,
        "age" : parseInt(req.body.age),
        "occupation" : req.body.occupation
    }
        data.push(newPerson);
    res.redirect("/api/all")
});