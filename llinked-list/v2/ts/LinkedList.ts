class ListNode<T>{

    data:T
    next:ListNode<T> | null
    previous:ListNode<T> | null
    constructor(data:T){
        this.next=null
        this.previous=null
        this.data=data
    }

}

export type ListCallback<T>=(data:T,index:number,node:ListNode<T>)=>void

export class LinkedList<T>{

    private root:ListNode<T> | null

    constructor(){
        this.root=null
    }

    addToBegin(data:T){
        if(this.root){
            const newNode=new ListNode<T>(data)
            newNode.next=this.root
            this.root.previous=newNode
            this.root=newNode
        }else{
            this.root=new ListNode<T>(data)
        }
    }

    addToEnd(data:T){
        if(this.root){
            let current=this.root
            while(current){
                if(current.next===null){
                    const newNode=new ListNode<T>(data)
                    newNode.previous=current
                    current.next=newNode
                    break
                }
                current=current.next
            }
        }else{
            this.root=new ListNode<T>(data)
        }
    }

    pickFromEnd():T{
        if(this.root){
            let current=this.root
            while(current){
                if(current.next===null){
                    const data=current.data
                    current.previous.next=null
                    return data
                }
                current=current.next
            }
        }
        throw new TypeError('List empty')
    }
 
    pickFromBegin():T{
        if(this.root){
            const data=this.root.data
            const newFirst=this.root.next
            newFirst.previous=null
            this.root=newFirst
            return data
        }
        throw new TypeError('List empty')
    }

    foreach(callback:ListCallback<T>){
        let current=this.root
        let index=0
        while(current){
            callback(current.data,index,current)
            current=current.next
            index++
        }
    }

}