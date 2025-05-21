// uses a heap -> use nodes instead of integers

class Node{
    constructor(data, priority){    
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }

    print(){
        console.log(this.values);
    }

    insert(priority, data=0){
        // insert at the end 
        this.values.push(new Node(data, priority));

        // move up by comparing priority to parent -> parent is (n-1)/2
        let index = this.values.length-1;
        
        while(index > 0){
            let indexParent = Math.floor((index-1)/2);
            if(this.values[index].priority > this.values[indexParent].priority){
                [this.values[index], this.values[indexParent]] = [this.values[indexParent], this.values[index]];
                index = indexParent;
            }else{
                break;
            }
        }
    }

    retrive(){
        let ret = this.values[0];
        this.values[0] = this.values.pop();

        let index = 0;
        while(2*index+1 < this.values.length){
            let child = 2*index+1;
            if(child + 1 < this.values.length && this.values[child].priority < this.values[child+1].priority) child++;
            if(this.values[index].priority > this.values[child].priority) break;
            [this.values[index], this.values[child]] = [this.values[child], this.values[index]];
            index = child;
        }

        return ret;
    }
}

let queue = new PriorityQueue();

queue.insert(10);
queue.insert(8);
queue.insert(3);
queue.insert(6);
queue.insert(2);
queue.insert(1);
queue.print();

queue.insert(9);
queue.print();
queue.insert(12);
queue.print();
queue.insert(4);
queue.print();
console.log('--- Removing Top ---')
queue.retrive();
queue.print();

queue.retrive();
queue.print();

queue.retrive();
queue.print();