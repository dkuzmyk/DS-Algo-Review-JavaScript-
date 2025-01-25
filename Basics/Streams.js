// start using data before it's loaded

const fs = require('fs');

const readStream = fs.createReadStream('./JavaScript/blog1.txt', {encoding: 'utf-8'});

const writeStream = fs.createWriteStream('./JavaScript/blog2.txt');

// on is an event listener
readStream.on('data', (chunk) => {
    console.log('## new chunk ##');
    console.log(chunk);

    writeStream.write('\n New Chunk \n');
    writeStream.write(chunk);
});

console.log('./JavaScript/blog2.txt');

// PIPING

readStream.pipe(writeStream);