class ListNode{
    constructor(data){
        this.data=data
        this.isEnd=false
        this.next=null
        this.previous=null
    }
}

export class CircleList{

    constructor(){
        this.root=null
        this.length=0
    }

    addToEnd(data){
        const newNode=new ListNode(data)
        if(!this.root){
            this.root=newNode
        }else if(!this.root.next && !this.root.previous){
            newNode.previous=this.root
            newNode.next=this.root
            this.root.previous=newNode
            this.root.next=newNode
            newNode.isEnd=true
        }else{
            const last=this.root.previous
            last.next=newNode
            last.isEnd=false
            newNode.next=this.root
            newNode.previous=last
            newNode.isEnd=true
            this.root.previous=newNode
        }
        this.length++
    }

    addToBegin(data){
        const newNode=new ListNode(data)
        if(!this.root){
            this.root=newNode
        }else if(!this.root.next && !this.root.previous){
            newNode.next=this.root
            newNode.previous=this.root
            this.root=true
            this.root=newNode
        }else{
            newNode.next=this.root
            newNode.previous=this.root.previous
            this.root=newNode
        }
        this.length++
    }

    peekLast(){
        if(this.root && this.root.previous){
            const last=this.root.previous
            this.root.previous=last.previous
            last.previous.next=this.root
            last.previous.isEnd=true
            this.length--
            return last.data
        }
    }

    peekFirst(){
        if(this.root && this.root.next){
            const data=this.root.data
            this.root.next.previous=this.root.previous
            this.root.previous.next=this.root.next
            this.root=this.root.next
            this.length--
            return data
        }
    }

    findByData(data){
        let current=this.root
        while(!current.isEnd){
            if(data===current.data){
                return true
            }
            current=current.next
        }
        return current.data===data
    }

    foreach(callback){
        let current=this.root
        while(!current.isEnd){
            callback(current)
            current=current.next
        }
        callback(current)
    }

    reverse(){
        const newList=new CircleList()
        this.root.isEnd=true
        this.root.previous.isEnd=false
        let current=this.root.previous
        while(!current.isEnd){
            newList.addToEnd(current.data)
            current=current.previous
        }
        newList.addToEnd(current.data)
        this.root=newList.root
    }

}