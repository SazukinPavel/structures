"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
class TreeNode {
    constructor(value) {
        this.value = value;
        this.count = 1;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    obxodDfs(callbak, method) {
        if (this.root) {
            if (method === 'preOrder') {
                this.preOrder(this.root, callbak);
                return;
            }
            if (method === 'inOrder') {
                this.inOrder(this.root, callbak);
                return;
            }
            if (method === 'postOrder') {
                this.postOrder(this.root, callbak);
                return;
            }
        }
    }
    preOrder(node, callback) {
        if (!node) {
            return;
        }
        callback(node);
        this.preOrder(node.left, callback);
        this.preOrder(node.right, callback);
    }
    inOrder(node, callback) {
        if (!node) {
            return;
        }
        this.preOrder(node.left, callback);
        callback(node);
        this.preOrder(node.right, callback);
    }
    postOrder(node, callback) {
        if (!node) {
            return;
        }
        this.preOrder(node.left, callback);
        callback(node);
        this.preOrder(node.right, callback);
    }
    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value);
            return;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = new TreeNode(value);
                    return;
                }
                current = current.left;
            }
            else if (value > current.value) {
                if (!current.right) {
                    current.right = new TreeNode(value);
                    return;
                }
                current = current.right;
            }
            else {
                current.count += 1;
                return;
            }
        }
    }
    find(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return { value: current.value, count: current.count };
            }
            else if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
    }
}
exports.BinaryTree = BinaryTree;
