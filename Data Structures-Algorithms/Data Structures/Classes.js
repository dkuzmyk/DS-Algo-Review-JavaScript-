class Node{
    constructor(first, last){
        this.name = first;
        this.lastName = last;
    }

    fullname(){
        return `The full name is ${this.name} ${this.last}`;
    }

    static enrollUsers(...people){
        return 'Enrolling!!'
    }
}

let node = new Node('pinco', 'pallino');
// console.log(node.name)
// console.log(node.lastName)

console.log(node.fullname())
console.log(Node.enrollUsers())


