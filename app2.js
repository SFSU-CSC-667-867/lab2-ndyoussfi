const express = require('express'); // import
// const axios = require('axios');


const app = express(); // express is a constructor, getting reference
const port = 3001;


app.get('/world', (req, res) => res.send('Hello network!')); // .get to declare a route, get request. res.send is a callback

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // .listen runs the server, console.log is a callback