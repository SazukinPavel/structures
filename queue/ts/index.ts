import { Queue } from "./Queue";

const queue=new Queue()
queue.add(1)
queue.add(2)
queue.add(3)
queue.add(4)
queue.add(5)
queue.add(6)
console.log('Queue');
queue.foreach((d)=>console.log(d))
queue.pick()
queue.pick()
queue.pick()
console.log('After picking');
queue.foreach((d)=>console.log(d))