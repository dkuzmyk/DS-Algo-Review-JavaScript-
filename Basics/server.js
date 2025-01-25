const http = require('http');
const fs = require('fs');



// create server
const server = http.createServer((req, res) => {
    console.log('request made');
    console.log(req.url, req.method);



    // set header
    res.setHeader('Content-Type', 'text/html');
    //res.write('<head><link rel="styleseet" href="localhost:3000">Refresh</head>')
    //res.write('<p>hello there</p>');
    //res.write('<p>how u doing</p>');
    //res.end();

    let path = './JavaScript/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about_redirect':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    // returning html files
    // read file first, then send response
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
});

// listening
server.listen(3000, 'localhost', () => {
    console.log('Listening port 3000');
});

