const { NotImplementedError } = require('../lib');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }

  add(data) {
    if (this._root === null) {
      this._root = new Node(data);
      return;
    }
    let current = this._root;
    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = new Node(data);
          return;
        }
        current = current.left;
      } else if (data > current.data) {
        if (current.right === null) {
          current.right = new Node(data);
          return;
        }
        current = current.right;
      } else {
        return;
      }
    }
  }

  find(data) {
    let current = this._root;
    while (current !== null) {
      if (data === current.data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    let current = this._root;
    while (current !== null) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

remove(data) {
  this._root = this._removeNode(this._root, data);
}

_removeNode(node, data) {
  if (node === null) return null;

  if (data < node.data) {
    node.left = this._removeNode(node.left, data);
    return node;
  }
  if (data > node.data) {
    node.right = this._removeNode(node.right, data);
    return node;
  }

  if (node.left === null && node.right === null) return null;
  if (node.left === null) return node.right;
  if (node.right === null) return node.left; 
  const successor = this._minNode(node.right);
  node.data = successor.data;
  node.right = this._removeNode(node.right, successor.data);
  return node;
}

_minNode(node) {
  while (node.left !== null) node = node.left;
  return node;
}

  min() {
    let current = this._root;
    if (current === null) {return null};

    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this._root;
    if (current === null) {return null};

    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};