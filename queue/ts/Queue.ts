class QueueNode<T>{
    data:T
    next:QueueNode<T> | null
    previous:QueueNode<T> | null

    constructor(data:T){
        this.data=data
        this.next=null
        this.previous=null
    }
}

type QueueCallback<T>=(d:T)=>void

export class Queue<T>{
    private begin:QueueNode<T> | null
    private end:QueueNode<T> | null

    constructor(){
        this.begin=null
        this.end=null
    }

    private setFirst(data:T){
        const node=new QueueNode(data)
        this.begin=node
        this.end=node
    }

    add(data:T){
        if(this.begin){
            const node=new QueueNode(data)
            this.begin.previous=node
            node.next=this.begin
            this.begin=node
        }else{
            this.setFirst(data)
        }
    }

    pick():T{
        if(this.begin && this.end){
            const data=this.end?.data
            this.end=this.end?.previous
            if(this.end){
                this.end.next=null
            }     
            return data       
        }
        throw new TypeError('Queue is empty')
    }

    foreach(callback:QueueCallback<T>){
        let current=this.begin
        while(current){
            callback(current.data)
            current=current.next
        }
    }

}