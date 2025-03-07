class Node{
    constructor(data){
        this.next = null;
        this.prev = null;
        this.data = data;
    }
}

class DoublyLinkedList{
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

    printReverse(){
        let current = this.tail;
        while(current != null){
            console.log(current.data);
            current = current.prev;
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
            node.prev = this.tail;
            this.tail = this.tail.next;
        }
    }

    pop(){
        // pop the last item
        let toRemove = this.tail;
        this.tail = this.tail.prev;
        this.tail.next = null; 
        toRemove.prev = null;
    }

    shift(){
        // remove the first element
        let curr = this.head;
        this.head = curr.next;
        this.head.prev = null;
        curr.next = null;
    }

    unshift(data){
        // add node at beginning
        let node = new Node(data);
        node.next = this.head;
        this.head.prev = node;
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
        node.prev = current;
        current.next = node;
        node.next.prev = node;
    }

    remove(index){
        if(index==0){ 
            this.shift(); 
            return
        }
        let current = this.head;
        for(let i = 0; i < index-1; i++){
            current = current.next;
        }
        
        let tmp = current.next;
        current.next = tmp.next;
        tmp.next.prev = current;
        tmp.next = null;
        tmp.prev = null;
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

let list = new DoublyLinkedList();
list.push(3);
list.push(6);
list.push(8);
list.push(11);
list.print();
list.printReverse();
console.log('=======')


