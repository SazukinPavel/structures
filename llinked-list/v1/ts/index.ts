import { LinkedList, ListCallback } from "./LinkedList";

const callback:ListCallback<number>=(value,index,node)=>{
    console.log(node.data);
}

const list=new LinkedList<number>()
list.pushToEnd(10)
list.pushToBegin(2)
list.pushToEnd(3)
list.pushToBegin(12)
list.pushToEnd(4)
list.pushToEnd(22)
console.log('untill pick');
list.foreach(callback)
console.log('after pick');
list.peeq()
list.peeq()
list.foreach(callback)

