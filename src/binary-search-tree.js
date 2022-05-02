const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNF = null
  }

  root() {
    return this.rootNF
  }

  add(data) {
    this.rootNF = addWithin(this.rootNF, data)
    function addWithin(node, data) {
      if(!node) {
        return new Node(data)
      }
      if(node.data === data) {
        return node
      }
      if(data < node.data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node
    }
  }

  has(data) {
    return searchWithin(this.rootNF, data)
    function searchWithin(node, data) {
      if(!node) {
        return false
      }
      if(node.data === data) {
        return true
      }
      return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data)
    }
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
    this.rootNF = removeNode(this.rootNF, data)

    function removeNode(node, data) {
      if(!node) {
        return null
      }
      if(data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if(data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if(!node.left && !node.right) {
          return null
        }
        if(!node.left) {
          node = node.right
          return node
        }
        if(!node.right) {
          node = node.left
          return node
        }
        let minFromRight = node.right
        while(minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)
        return node
      }
    }
  }

  min() {
    if(!this.rootNF) {
      return null
    }
    let el = this.rootNF
    while(el.left) {
      el = el.left
    }
    return el.data
  }

  max() {
    if(!this.rootNF) {
      return null
    }
    let el = this.rootNF
    while(el.right) {
      el = el.right
    }
    return el.data
  }
}

// const tree = new BinarySearchTree()
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// tree.remove(6);
// tree.remove(2);
// console.log(tree.root().data)

module.exports = {
  BinarySearchTree
};