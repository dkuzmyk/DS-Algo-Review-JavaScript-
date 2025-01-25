var fs = require('fs');

fs.readFile('JavaScript/files_txt/text.txt', 'utf8', function(err, data){
    if(err){
       console.log(err); 
    }
});

console.log('Start here')
