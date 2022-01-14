
const inorder = (tree) => {
    const out = [];
    const traverse = (node) => {
        if (node.l !== undefined) {
            traverse(node.l);
        }
        out.push(node.v);
        if (node.r !== undefined) {
            traverse(node.r);
        }
    }
    traverse(tree);
    return out;
}

module.exports = inorder;