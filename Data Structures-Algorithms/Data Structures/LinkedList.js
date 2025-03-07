class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    print(){
        let current = this.head;
        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }

    push(data){
        // push to end of array
        let node = new Node(data);

        if(this.head == null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = this.tail.next;
        }
    }

    pop(){
        // pop the last item
        let current = this.head;
        while(current.next != this.tail){
            current = current.next;
        }

        current.next = null;
        this.tail = current;
    }

    shift(){
        // remove the first element
        let curr = this.head;
        this.head = curr.next;
        curr.next = null;
    }

    unshift(data){
        // add node at beginning
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    get(index){
        let current = this.head;
        for(let i = 0; i != index; i++){
            current = current.next;
        }

        return current.data;
    }

    set(index, value){
        let current = this.head;
        for(let i = 0; i != index; i++){
            current = current.next;
        }
        current.data = value;
    }

    insert(index, value){
        if(index==0) {
            this.unshift(value);
            return;
        }
        let node = new Node(value);
        let current = this.head;

        for(let i = 0; i < index-1; i++){
            current = current.next;
        }

        node.next = current.next;
        current.next = node;
    }

    remove(index){
        if(index==0){ 
            this.shift(); 
            return}
        let current = this.head;
        for(let i = 0; i < index-1; i++){
            current = current.next;
        }
        
        let tmp = current.next;
        current.next = tmp.next;
        tmp.next = null;
    }

    reverse(){
        let current = this.head;
        this.head = null;
        while(current != null){
            console.log('pushing ',current.data)
            this.unshift(current.data);
            current = current.next;
        }
    }
}

let list = new SinglyLinkedList();
list.push(3);
list.push(6);
list.push(8);
list.push(11);
list.print();
console.log('=======')

// list.pop();
list.shift();
list.print();
console.log('=======')

// list.pop();
list.shift();
list.print();
console.log('=======')

list.unshift(55);
list.unshift(66);
list.print();
console.log('=======')

console.log('get 2 -> '+list.get(2))
console.log('=======')

list.insert(3, 888)
list.print();
console.log('=======')

list.reverse()
list.print();
// list.reverse()
// list.print();
// console.log('=======')

