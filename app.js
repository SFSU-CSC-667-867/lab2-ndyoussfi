const express = require('express'); // import
const axios = require('axios');


const app = express(); // express is a constructor, getting reference
const port = 3000; 

app.get('/', (req, res) => res.send("Hello World! I'm Nour")); // .get to declare a route, get request. res.send is a callback

// passing params
app.get('/hello', (req, res) => {
    console.log(req.query);
    res.send("Hello " + req.query.name);
});

app.get('/add', (req, res) => res.send('0')); 

// network request
app.get('/network', (req, res) => {
    axios.get('http://localhost:3001/world') // returns a promise
    .then((networkResponse) => { // returns a response
        res.send(networkResponse.data);
    })
    .catch(() => { // always add .catch after .then
        res.send(':( did not work.');
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // .listen runs the server, console.log is a callback