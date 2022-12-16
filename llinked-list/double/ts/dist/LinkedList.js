"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class ListNode {
    constructor(data) {
        this.next = null;
        this.previous = null;
        this.data = data;
    }
}
class LinkedList {
    constructor() {
        this.root = null;
    }
    addToBegin(data) {
        if (this.root) {
            const newNode = new ListNode(data);
            newNode.next = this.root;
            this.root.previous = newNode;
            this.root = newNode;
        }
        else {
            this.root = new ListNode(data);
        }
    }
    addToEnd(data) {
        if (this.root) {
            let current = this.root;
            while (current) {
                if (current.next === null) {
                    const newNode = new ListNode(data);
                    newNode.previous = current;
                    current.next = newNode;
                    break;
                }
                current = current.next;
            }
        }
        else {
            this.root = new ListNode(data);
        }
    }
    pickFromEnd() {
        if (this.root) {
            let current = this.root;
            while (current) {
                if (current.next === null) {
                    const data = current.data;
                    current.previous.next = null;
                    return data;
                }
                current = current.next;
            }
        }
        throw new TypeError('List empty');
    }
    pickFromBegin() {
        if (this.root) {
            const data = this.root.data;
            const newFirst = this.root.next;
            newFirst.previous = null;
            this.root = newFirst;
            return data;
        }
        throw new TypeError('List empty');
    }
    foreach(callback) {
        let current = this.root;
        let index = 0;
        while (current) {
            callback(current.data, index, current);
            current = current.next;
            index++;
        }
    }
}
exports.LinkedList = LinkedList;
