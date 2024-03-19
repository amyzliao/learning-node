var http = require('http');
var fs = require('fs');

http
    .createServer(function (req, res) {
        // this sends soooo much data to the client. this is bad
        // const text = fs.readFileSync('./content/big.txt', 'utf8');
        // res.end(text);

        // this sends it in chunks, its better
        const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
        fileStream.on('open', () => {
            // push from readstream to writestream
            fileStream.pipe(res)
        })
        fileStream.on('error', (err) => {
            res.end(err);
        })
    })
    .listen(5000);