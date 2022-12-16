"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class Stack {
    constructor() {
        this.head = null;
    }
    add(data) {
        if (this.head) {
            const node = new Node(data);
            node.next = this.head;
            this.head = node;
        }
        else {
            this.head = new Node(data);
        }
    }
    pick() {
        if (this.head) {
            const data = this.head.data;
            this.head = this.head.next;
            return data;
        }
        throw new TypeError('Stack is empty');
    }
    foreach(callback) {
        let current = this.head;
        while (current) {
            callback(current.data);
            current = current.next;
        }
    }
}
exports.Stack = Stack;
