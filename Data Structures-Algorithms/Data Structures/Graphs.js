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
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');

graph.addEdges('A', 'B');
graph.addEdges('C', 'A');
graph.print();

graph.removeVertex('A');
graph.print();