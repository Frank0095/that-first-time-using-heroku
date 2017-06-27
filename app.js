const express = require('express');
const app = express();

const port = process.env.PORT || 1234;

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
    response.sendfile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log('Server listing on port' + port);
});