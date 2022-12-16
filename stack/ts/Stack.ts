class Node<T>{
    data:T
    next:Node<T> | null

    constructor(data:T){
        this.data=data
        this.next=null
    }
}

export type StackCallback<T>=(data:T)=>void

export class Stack<T>{

    private head:Node<T> | null

    constructor(){
        this.head=null
    }

    add(data:T){
        if(this.head){
            const node=new Node(data)
            node.next=this.head
            this.head=node
        }else{
            this.head=new Node(data)
        }
    }

    pick():T{
        if(this.head){
            const data=this.head.data
            this.head=this.head.next
            return data
        }
        throw new TypeError('Stack is empty')
    }

    foreach(callback:StackCallback<T>){
        let current=this.head
        while(current){
            callback(current.data)
            current=current.next
        }
    }


}