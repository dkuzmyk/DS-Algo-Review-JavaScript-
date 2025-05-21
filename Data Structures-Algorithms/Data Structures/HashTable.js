class HashTable{

    constructor(){
        this.table = [];
    }

}

function hash(key, len){
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * PRIME + value) % len;
    }

    return total;
}

console.log(hash('abc', 10));
console.log(hash('bde', 10));
console.log(hash('cqe', 10));
console.log(hash('ddwadas', 10));
console.log(hash('easf', 10));