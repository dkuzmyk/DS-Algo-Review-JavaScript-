class Graph{
    constructor(){
        this.list = {};
    }

    print(){
        Object.entries(this.list).forEach(([key, list]) => {
            console.log(`${key}: ${list.join(", ")}`);
        });

    }

    addVertex(vertex){
        if(!this.list[vertex]) this.list[vertex] = [];
    }

    addEdges(v1, v2){
        if(this.list[v1] && this.list[v2]){
            this.list[v1].push(v2);
            this.list[v2].push(v1);
        }
    }

    removeEdge(v1, v2){
        if(this.list[v1] && this.list[v2]){
            this.list[v1] = this.list[v1].filter( v => v !== v2);
            this.list[v2] = this.list[v2].filter( v => v !== v1);
        }
    }

    removeVertex(v){
        if(this.list[v]){
            for (let vertex of this.list[v]) {
                this.removeEdge(v, vertex);
            }
            delete this.list[v];
        }
    }

    dfsRecursive(vertex){
        this.queue = [];
        this.queue.push(vertex);

        this.visited = {};

        this.dfsHelper();
    }

    dfsHelper(){
        if(this.queue.length == 0) return;
        console.log('Queue -> ', this.queue);

        let current = this.queue.pop();
        if(this.visited[current]){
            this.dfsRHelper();
            return;
        }

        console.log("Current -> "+current)
        this.visited[current] = true;

        for(let item of this.list[current]){
            if(!this.visited[item]){
                this.queue.push(item);
            }
        }

        this.dfsRHelper();
    }

    dfsIterative(vertex){
        this.stack = [];
        this.stack.push(vertex);
        this.result = [];
        this.visited = {};

        while(this.stack.length != 0){
            let current = this.stack.pop()
            if(this.visited[current]) continue;
            this.visited[current] = true;

            {
                this.result.push(current);
            }

            for(let i = 0; i < this.list[current].length; i++){
                if(!this.visited[this.list[current][i]]){
                    this.stack.push(this.list[current][i]);
                }
            }
        }

        return this.result;
    }

    bfs(vertex){
        this.stack = [];
        this.stack.push(vertex);
        this.result = [];
        this.visited = {};

        while(this.stack.length != 0){
            let current = this.stack.shift()
            if(this.visited[current]) continue;
            this.visited[current] = true;

            {
                this.result.push(current);
            }

            for(let i = 0; i < this.list[current].length; i++){
                if(!this.visited[this.list[current][i]]){
                    this.stack.push(this.list[current][i]);
                }
            }
        }

        return this.result;
    }

}

graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdges('A', 'B');
graph.addEdges('A', 'C');
graph.addEdges('B', 'D');
graph.addEdges('C', 'E');
graph.addEdges('D', 'E');
graph.addEdges('D', 'F');
graph.addEdges('E', 'F');

// graph.dfsRecursive('A');

console.log(graph.bfs('A'));

