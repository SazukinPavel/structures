"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stack_1 = require("./Stack");
const stack = new Stack_1.Stack();
stack.add(1);
stack.add(2);
stack.add(3);
stack.add(4);
stack.add(5);
stack.add(6);
console.log('Stack');
stack.foreach((d) => console.log(d));
stack.pick();
stack.pick();
stack.pick();
console.log('After picking');
stack.foreach((d) => console.log(d));
