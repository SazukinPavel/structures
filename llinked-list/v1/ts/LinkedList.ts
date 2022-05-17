class ListNode<T>{

    data:T
    next:ListNode<T>| null

    constructor(data:T){
        this.data=data
        this.next=null
    }
}

export type ListCallback<T>=(data:T,index:number,node:ListNode<T>)=>void

export class LinkedList<T>{

    private root:ListNode<T> | null

    constructor(){
        this.root=null
    }

    pushToEnd(data:T){
        if(this.root===null){
            this.root=new ListNode(data)
        }else{
            let current=this.root
            while(current){ 
                if(current.next===null){
                    current.next=new ListNode(data)
                    break
                }
                current=current.next
            }
        }
    }

    pushToBegin(data:T){
        if(this.root===null){
            this.root=new ListNode(data)
        }else{
            const newNode=new ListNode(data)
            newNode.next=this.root
            this.root=newNode
        }
    }

    foreach(callback:ListCallback<T>){
     if(this.root){
            let current:ListNode<T> | null=this.root
            let index=0
            while(current){
                callback(current.data,index,current)
                current=current.next 
                index++
            }
            return
        }
        throw new TypeError('List empty')   
    }

    peeq():T{
        if(this.root){
            let current:ListNode<T> | null=this.root
            while(current?.next){
                if(current.next.next===null){
                    const data= current?.next.data
                    current.next=null
                    return data
                }
                current=current.next
            }
        }
        throw new TypeError('List empty')
    }
}