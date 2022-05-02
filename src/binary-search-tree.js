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
    this.rootNF = addData(this.rootNF, data)
    function addData(el, data) {
      if(!el) {
        return new Node(data)
      } else if(el.data === data) {
        return el
      } else if(data < el.data) {
        el.left = addData(el.left, data)
      } else {
        el.right = addData(el.right, data)
      }
      return el
    }
  }

  has(data) {
    function searchData(el, data) {
      if(!el) {
        return false
      } else if(el.data === data) {
        return true
      } else if(data < el.data) {
        return searchData(el.left, data)
      } else {
        return searchData(el.right, data)
      }
    }
    return searchData(this.rootNF, data)
  }

  find(data) {
    function findData(el, data) {
      if(!el) {
        return null
      } else if(el.data === data) {
        return el
      } else if(data < el.data) {
        return findData(el.left, data)
      } else {
        return findData(el.right, data)
      }
    }
    return findData(this.rootNF, data)
  }

  remove(data) {
    this.rootNF = removeData(this.rootNF, data)
    function removeData(el, data) {
      if(!el) {
        return null
      } else if(data < el.data) {
        el.left = removeData(el.left, data)
        return el
      } else if(data > el.data) {
        el.right = removeData(el.right, data)
        return el
      } else {
        if(!el.left && !el.right) {
          return null
        } else if(!el.left) {
          el = el.right
          return el
        } else if(!el.right) {
          el = el.left
          return el
        } else {
          let minFromRight = el.right
          while(minFromRight.left) {
            minFromRight = minFromRight.left
          }
          el.data = minFromRight.data
          el.right = removeData(el.right, minFromRight.data)
          return el
        }
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

module.exports = {
  BinarySearchTree
};