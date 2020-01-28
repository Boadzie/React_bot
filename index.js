const express = require('express');

const app = express();

const port = process.env.PORT || 5000

app.get('/', function(req, res) {
    res.send('Helloo express!!')
});


app.listen('5000', ()=>{
    console.log(`app started on port ${port}`)
})