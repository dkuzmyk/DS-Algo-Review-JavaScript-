class Node{
    constructor(data){
        this.next = null;
        this.data = data;
    }
}

class Stack{
    constructor(){
        this.head = null;
    }

    print(){
        let curr = this.head;
        while(curr != null){
            console.log(curr.data);
            curr = curr.next;
        }
    }

    push(data){
        // add at the beginning
        let node = new Node(data);
        if(this.head == null){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
    }

    pop(){
        // pop the beginning
        if(this.head == null) return;
        let curr = this.head;
        this.head = curr.next;
        curr.next = null;
    }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)
stack.print()
console.log('===========')

stack.pop()
stack.pop()
stack.print()