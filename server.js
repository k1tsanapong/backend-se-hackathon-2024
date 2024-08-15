const express = require('express');
const app = express();
const port = 3000;

app.get('/helloworld', helloworld);

function helloworld(request, response, next) {
    response.send('Hello World!');
}

app.listen(port, function() {
    console.log("Server start on port: ", port);
});