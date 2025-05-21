class MaxBinaryHeap{

    constructor(array=[]){
        this.values = array;
    }

    print(){
        console.log(this.values);
    }

    insert(value){
        this.values.push(value);
        
        let valueIndex = this.values.length-1;

        while(valueIndex >= 0){
            let parentIndex = Math.floor((valueIndex-1)/2); 
            if(value > this.values[parentIndex]){
                let parent = this.values[parentIndex];
                this.values[parentIndex] = this.values[valueIndex];
                this.values[valueIndex] = parent;
                valueIndex = parentIndex;
            }else{
                break;
            }
        }
    }

    extractMax(){
        let ret = this.values[0];
        this.values[0] = this.values.pop();

        let index = 0;
        while (2 * index + 1 < this.values.length) {
            let child = 2 * index + 1;
            if (child + 1 < this.values.length && this.values[child] < this.values[child + 1]) child++;
            if (this.values[index] >= this.values[child]) break;
            [this.values[index], this.values[child]] = [this.values[child], this.values[index]];    //swap
            index = child;
        }

        return ret;
    }
}

let heap = new MaxBinaryHeap([41, 39, 33, 18, 27, 12])
heap.insert(55)
heap.print()
heap.extractMax();
heap.print()
heap.extractMax();
heap.print()
heap.extractMax();
heap.print()

