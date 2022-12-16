import { CircleList } from "./CircleList.js";

const list=new CircleList()
list.addToEnd(1)
list.addToEnd(2)
list.addToEnd(3)
list.addToEnd(4)
list.addToEnd(5)
list.addToEnd(6)
// console.log('List length',list.length);
// list.foreach((node)=>console.log(node.data))
// console.log(list.findByData(2));
// console.log(list.peekLast());
// console.log(list.peekLast());
// console.log(list.peekFirst());
// console.log('New list');
// list.foreach((node)=>console.log(node.data))
list.reverse()
console.log('New list');
list.foreach((node)=>console.log(node.data))
