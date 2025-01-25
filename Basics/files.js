// FILE SYSTEM

const fs = require('fs');

// reading
fs.readFile('./JavaScript/files_txt/f1.txt', (err, data) => {
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})


// writing
fs.writeFile('./JavaScript/files_txt/f1.txt', 'REPLACED TEXT', () => {
    console.log('file wirtten');
});

fs.writeFile('./JavaScript/files_txt/f2.txt', 'NEW TEXT', () => {
    console.log('file wirtten');
});

// DIRECTORY
if(!fs.existsSync('./JavaScript/testFolder')){
    fs.mkdir('./JavaScript/testFolder', (err) => {
        if (err){
            console.log(err);
        }

        console.log('Folder Created');
    })
} else{
    fs.rmdir('./JavaScript/testFolder', (err) => {
        if (err){
            console.log(err)
        }
        console.log('Folder Deleted')
    })
}

// deleting

if (fs.existsSync('./JavaScript/testFolder')){
    fs.unlink('./JavaScript/testFolder', (err) =>{
        if (err) {console.log(err);}
        console.log('Deleted')
    })
}

if (fs.existsSync('./JavaScript/files_txt/f2.txt')){
    fs.unlink('./JavaScript/f2.txt', (err) =>{
        if (err) {console.log(err);}
        console.log('Deleted')
    })
}