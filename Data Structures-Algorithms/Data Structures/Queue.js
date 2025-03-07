class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}

class Stack{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    print(){
        let curr = this.head;
        while(curr != null){
            console.log(curr.data);
            curr = curr.next;
        }
    }

    enqueue(data){
        // add at the end
        let node = new Node(data);
        if(this.tail == null){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            this.tail = node;
        }
    }

    dequeue(){
        // pop the front
        if(this.head == null) return;
        let curr = this.head;
        this.head = curr.next;
        curr.next = null;
    }
}

let stack = new Stack();
stack.enqueue(1)
stack.enqueue(2)
stack.enqueue(3)
stack.enqueue(4)
stack.enqueue(5)
stack.print()
console.log('===========')

stack.dequeue()
stack.dequeue()
stack.print()