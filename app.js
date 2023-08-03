const express = require("express");

const app = express();

const data = require('./api/data.json')

app.listen(3000, ()=>{
    console.log("Express server running");
})

app.get('/api/all', (req, res) => {
    res.send(data);
});

app.get('/api/:id', (req, res) => {
    const id = req.params.id;
    res.send(data[id]);
});