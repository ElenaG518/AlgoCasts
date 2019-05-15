// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    // this.head = new Node(data, this.head);
  }

  size() {
    let counter =0;
    let node =this.head;
    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      } 
      node = node.next;   
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if(!this.head) {
      return null;
    }
    const node = this.head;
    this.head = node.next;
    // this.head = this.head.next;

  }

  removeLast() {
    if(!this.head) {
      return;
    }
    if (!this.head.next) {
      return this.head=null;
    }
    let prev = this.head;
    let node = this.head.next;

    while (node.next) {      
      prev = node;
      node = prev.next;
    } 
      prev.next = null;
        return;    
  }

  insertLast(data) {    
    //get the last element in the list, 
    const last = this.getLast();
    // if list is empty, add it to beginning of list, and have the head of the list point to it
    if (!last) {
      this.head = new Node(data);
    } else {
      last.next = new Node(data); 
    // create a new node, and have  the next for the last element point to the new node
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      node = node.next;
      counter++;
    }
    return null;
    
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    
    const prev = this.getAt(index-1);
    // check that prev is not null, or that the prev.next is not null
    if (!prev || !prev.next) {
       return;      
    }
    // make sure prev.next is not undefined, otherwise will get an error if we call prev.next.next as it will be calling next of undefined like undefined.next.
    prev.next = prev.next.next;
    
  }

  insertAt(data, index) {
    // inserts a new node with data at the 0 index when the list is empty or index is zero
    if (!this.head || index ===0) {
      this.head= new Node(data, this.head);
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();;
    prev.next = new Node(data, prev.next); 
  }

  forEach(fn) {
    // fn takes two arguments: node, and index
    let node = this.head;
    let counter = 0;
  
    while (node) {
        fn(node);
        node = node.next;
        counter++
    }
  }
  // this defines a generator function with the key of Symbol.iterator
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
