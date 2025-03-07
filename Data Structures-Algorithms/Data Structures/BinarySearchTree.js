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
}

let bst = new BST();
bst.insert(1);
bst.insert(8);
bst.insert(3);
bst.insert(7);
bst.insert(13);
bst.insert(2);
bst.print();

let found = bst.find(8)
console.log('right -> ',found.right.data)
console.log('left -> ',found.left.data)