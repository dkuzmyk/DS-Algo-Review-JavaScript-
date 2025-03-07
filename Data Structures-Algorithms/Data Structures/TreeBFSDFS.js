class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    print(){
        this.iterate(this.root)
    }

    iterate(node){
        if(node==null) return;
        console.log(node.data);
        this.iterate(node.left)
        this.iterate(node.right)
    }

    insert(val){
        let node = new Node(val);
        if(this.root!=null){
            let current = this.root;
            let done = false;
            while(!done){
                if(val > current.data){
                    if(current.right){
                        current = current.right;
                    }else{
                        current.right = node;
                        done = true;
                    }
                }else{
                    if(current.left){
                        current = current.left;
                    }else{
                        current.left = node;
                        done = true;
                    }
                }
            }
        }else{
            this.root = node;
        }
    }

    find(val){
        let current = this.root;
        while(true){
            if(val == current.data) {
                console.log('found', val);
                return current;
            }
            if(val > current.data){
                current = current.right;
            }else{
                current = current.left;
            }
        }
    }

    bfs(){
        this.queue = [];
        this.visited = [];

        this.queue.push(this.root)

        this.bfsIterator();
    }

    bfsIterator(){
        if(this.queue.length == 0) return;

        console.log(this.queue[0].data)
        this.visited.push(this.queue[0]);
        this.queue.shift();

        let current = this.visited[this.visited.length-1];
        if(current.left)
            this.queue.push(current.left);
        if(current.right)
            this.queue.push(current.right)

        this.bfsIterator();
    }

    dfs(type){
        switch(type){
            case 'preorder' : {
                this.preOrder(this.root);
                break;
            };
            case 'postorder' : {
                this.postOrder(this.root);
                break;
            }
            case 'inorder' : {
                this.inOrder(this.root);
                break;
            }
        }
        
    }

    preOrder(node){
        if(node==null) return;
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right)
    }

    postOrder(node){
        if(node==null) return;
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.data);
    }

    inOrder(node){
        if(node==null) return;
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }

}

let bst = new BST();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
// bst.bfs();
console.log('== pre order ==')
bst.dfs('preorder')
console.log('== post order ==')
bst.dfs('postorder')
console.log('== in order ==')
bst.dfs('inorder')



