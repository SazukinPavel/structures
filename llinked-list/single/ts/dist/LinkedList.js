"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.root = null;
    }
    pushToEnd(data) {
        if (this.root === null) {
            this.root = new ListNode(data);
        }
        else {
            let current = this.root;
            while (current) {
                if (current.next === null) {
                    current.next = new ListNode(data);
                    break;
                }
                current = current.next;
            }
        }
    }
    pushToBegin(data) {
        if (this.root === null) {
            this.root = new ListNode(data);
        }
        else {
            const newNode = new ListNode(data);
            newNode.next = this.root;
            this.root = newNode;
        }
    }
    foreach(callback) {
        if (this.root) {
            let current = this.root;
            let index = 0;
            while (current) {
                callback(current.data, index, current);
                current = current.next;
                index++;
            }
            return;
        }
        throw new TypeError('List empty');
    }
    peeq() {
        if (this.root) {
            let current = this.root;
            while (current === null || current === void 0 ? void 0 : current.next) {
                if (current.next.next === null) {
                    const data = current === null || current === void 0 ? void 0 : current.next.data;
                    current.next = null;
                    return data;
                }
                current = current.next;
            }
        }
        throw new TypeError('List empty');
    }
}
exports.LinkedList = LinkedList;
