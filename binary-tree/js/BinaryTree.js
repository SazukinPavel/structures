
class Node{
    constructor(value){
        this.value=value
        this.count=1
    }
}

class BinaryTree{

    constructor(){
        this.root=null
    }

    obxodDfs(callbak,method){
        if(method==='preOrder'){
            this.preOrder(this.root,callbak)
            return
        }
        if(method==='inOrder'){
            this.inOrder(this.root,callbak)
            return
        }
        if(method==='postOrder'){
            this.postOrder(this.root,callbak)
            return
        }
    }

    preOrder(node,callback){
        if(!node){
            return
        }
        callback(node)
        this.preOrder(node.left,callback)
        this.preOrder(node.right,callback)
    }

    inOrder(node,callback){
        if(!node){
            return
        }
        this.preOrder(node.left,callback)
        callback(node)
        this.preOrder(node.right,callback)
    }

    postOrder(node,callback){
        if(!node){
            return
        }
        this.preOrder(node.left,callback)
        callback(node)
        this.preOrder(node.right,callback)
    }

    add(value){
        if(!this.root){
            this.root=new Node(value)
            return
        }
        let current=this.root
        while(current){
            if(value<current.value){
                if(!current.left){
                    current.left=new Node(value)
                    return
                }
                current=current.left
            }else if(value>current.value){
                if(!current.right){
                    current.right=new Node(value)
                    return
                }
                current=current.right
            }else{
                current.count+=1;
                return;
            }
        }
    }

    find(value){
        let current=this.root
        while(current){
            if(value===current.value){
                return {value:current.value,count:current.count}
            }else if(value<current.value){
                current=current.left
            }else{
                current=current.right
            }
        }
    }
}

const tree=new BinaryTree()
tree.add(10)
tree.add(3)
tree.add(20)
tree.add(16)
tree.add(7)
tree.add(9)
tree.add(90)
tree.add(12)
tree.add(9)

console.log('preOrder');

tree.obxodDfs((node)=>{
    console.log(node.value,node.count);
},'preOrder')

console.log('inOrder');

tree.obxodDfs((node)=>{
    console.log(node.value,node.count);
},'inOrder')

console.log('postOrder');

tree.obxodDfs((node)=>{
    console.log(node.value,node.count);
},'postOrder')

console.log(tree.find(90));