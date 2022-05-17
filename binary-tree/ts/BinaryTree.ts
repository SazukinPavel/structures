class TreeNode<T> {
    value: T;
    count: number;
    left:TreeNode<T>
    right:TreeNode<T>

    constructor(value: T) {
        this.value = value;
        this.count = 1;
    }

}

type BinaryTreeCallback<T>=(node:TreeNode<T>)=>void

type OrderType='preOrder'|'postOrder'|'inOrder'

export class BinaryTree<T>{

    private root:TreeNode<T> | null

    constructor(){
        this.root=null
    }

    obxodDfs(callbak:BinaryTreeCallback<T>,method:OrderType){
        if(this.root){
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
    }

    private preOrder(node:TreeNode<T>,callback:BinaryTreeCallback<T>){
        if(!node){
            return
        }
        callback(node)
        this.preOrder(node.left,callback)
        this.preOrder(node.right,callback)
    }

    inOrder(node:TreeNode<T>,callback:BinaryTreeCallback<T>){
        if(!node){
            return
        }
        this.preOrder(node.left,callback)
        callback(node)
        this.preOrder(node.right,callback)
    }

    postOrder(node:TreeNode<T>,callback:BinaryTreeCallback<T>){
        if(!node){
            return
        }
        this.preOrder(node.left,callback)
        callback(node)
        this.preOrder(node.right,callback)
    }

    add(value:T){
        if(!this.root){
            this.root=new TreeNode<T>(value)
            return
        }
        let current=this.root
        while(current){
            if(value<current.value){
                if(!current.left){
                    current.left=new TreeNode<T>(value)
                    return
                }
                current=current.left
            }else if(value>current.value){
                if(!current.right){
                    current.right=new TreeNode<T>(value)
                    return
                }
                current=current.right
            }else{
                current.count+=1;
                return;
            }
        }
    }

    find(value:T){
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

