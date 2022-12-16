"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }
}
class Queue {
    constructor() {
        this.begin = null;
        this.end = null;
    }
    setFirst(data) {
        const node = new QueueNode(data);
        this.begin = node;
        this.end = node;
    }
    add(data) {
        if (this.begin) {
            const node = new QueueNode(data);
            this.begin.previous = node;
            node.next = this.begin;
            this.begin = node;
        }
        else {
            this.setFirst(data);
        }
    }
    pick() {
        var _a, _b;
        if (this.begin && this.end) {
            const data = (_a = this.end) === null || _a === void 0 ? void 0 : _a.data;
            this.end = (_b = this.end) === null || _b === void 0 ? void 0 : _b.previous;
            if (this.end) {
                this.end.next = null;
            }
            return data;
        }
        throw new TypeError('Queue is empty');
    }
    foreach(callback) {
        let current = this.begin;
        while (current) {
            callback(current.data);
            current = current.next;
        }
    }
}
exports.Queue = Queue;
