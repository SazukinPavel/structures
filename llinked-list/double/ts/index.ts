import { LinkedList, ListCallback } from "./LinkedList";

const callback:ListCallback<number>=(value,index,node)=>{
    console.log(node.data);
}

const list=new LinkedList<number>()
list.addToBegin(10)
list.addToEnd(2)
list.addToBegin(3)
list.addToEnd(12)
list.addToEnd(4)
list.addToBegin(22)
console.log('untill pick');
list.foreach(callback)
console.log('after pick');
list.pickFromBegin()
list.pickFromEnd()
list.foreach(callback)
