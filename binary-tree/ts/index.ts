import { BinaryTree } from "./BinaryTree"

const tree=new BinaryTree<number>()
tree.add(10)
tree.add(3)
tree.add(20)
tree.add(16)
tree.add(7)
tree.add(9)
tree.add(90)
tree.add(12)
tree.add(9)

console.log('preOrder');

tree.obxodDfs((node)=>{
    console.log(node.value,node.count);
},'preOrder')

console.log('inOrder');

tree.obxodDfs((node)=>{
    console.log(node.value,node.count);
},'inOrder')

console.log('postOrder');

tree.obxodDfs((node)=>{
    console.log(node.value,node.count);
},'postOrder')

console.log(tree.find(90));