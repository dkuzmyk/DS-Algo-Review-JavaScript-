class SimplePriorityQueue{
    constructor(){
        this.values = [];
    }

    reset(){
        this.values = [];
    }

    length(){
        return this.values.length;
    }

    enqueue(val, priority){
        this.values.push({val, priority});
        this.sort();
    }

    dequeue(){
        return this.values.shift();
    }

    sort(){
        this.values.sort((a,b) => a.priority - b.priority);
    }
}


class WeightedGraph{
    constructor(){
        this.list = {};                             // adjacent (nodes, weight)
    }

    addVertex(vertex){
        if(!this.list[vertex]) this.list[vertex] = [];
    }

    addEdges(v1, v2, weight){
        if(this.list[v1] && this.list[v2]){
            this.list[v1].push({node:v2, weight});
            this.list[v2].push({node:v1, weight});
        }
    }

    // Dijkstra shortest path
    dsp(start, end){
        let queue = new SimplePriorityQueue();
        let distances = {};
        let previous = {};
        let current;
        let path = [];

        console.log('-> ',this.list)

        // init
        for(let e in this.list){
            if(e === start){
                distances[e] = 0;
                queue.enqueue(e, 0);
            }else{
                distances[e] = Infinity;                
                queue.enqueue(e, Infinity);
            }

            previous[e] = null;
        }

        while(queue.values.length){
            current = queue.dequeue().val;                  // remove the closest node and make it current
            if(current === end) {
                // return path
                while(previous[current]){
                    path.push(current);
                    current = previous[current];
                }
                break;
            }
            if(distances[current] !== Infinity){            // if neighbor is reachable
                for(let neighbor in this.list[current]){
                    let nextNode = this.list[current][neighbor];    // object {id, weight}
                    // console.log(nextNode);

                    // calcualte the new distance to each neighbor
                    let candidate = distances[current] + nextNode.weight;
                    if(candidate < distances[nextNode.node]){
                        distances[nextNode.node] = candidate;
                        previous[nextNode.node] = current;
                        queue.enqueue(nextNode.node, candidate);
                    }
                } 
            }
        }
        return path.concat(current).reverse();
    }


}

let graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdges('A','B',4);
graph.addEdges('A','C',2);
graph.addEdges('B','E',3);
graph.addEdges('C','D',2);
graph.addEdges('C','F',4);
graph.addEdges('D','E',3);
graph.addEdges('D','F',1);
graph.addEdges('E','F',1);

console.log(graph.dsp('A', 'E'));




