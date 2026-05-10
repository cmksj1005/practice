class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    let output = '';
    if (temp === null) {
      console.log('empty');
      return;
    }
    while (temp !== null) {
      output += String(temp.value);
      temp = temp.next;
      if (temp !== null) {
        output += ' <-> ';
      }
    }
    console.log(output);
  }

  getHead() {
    if (this.head === null) {
      console.log('Head: null');
    } else {
      console.log('Head: ' + this.head.value);
    }
  }

  getTail() {
    if (this.tail === null) {
      console.log('Tail: null');
    } else {
      console.log('Tail: ' + this.tail.value);
    }
  }

  getLength() {
    console.log('Length: ' + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  partitionList(x) {
    //   +===================================================+
    //   |               WRITE YOUR CODE HERE                |
    //   | Description:                                      |
    //   | - Partitions a doubly linked list around a value  |
    //   |   `x`.                                            |
    //   | - All nodes with values < x come before nodes     |
    //   |   with values >= x.                               |
    //   |                                                   |
    //   | Behavior:                                         |
    //   | - Uses two dummy nodes to build two sublists:     |
    //   |   one for smaller values, one for larger/equal.   |
    //   | - Traverses the list, detaching and reattaching   |
    //   |   nodes to the appropriate sublist.               |
    //   | - Maintains both `.next` and `.prev` pointers.    |
    //   | - Joins the two sublists and updates `this.head`. |
    //   | - Ensures final head's `.prev` is set to null.    |
    //   +===================================================+

    const dummy1 = new Node(0);
    const dummy2 = new Node(0);
    let dum1Cur = dummy1;
    let dum2Cur = dummy2;
    let current = this.head;

    console.log(dum2Cur);

    for (let i = 0; i < this.length; i++) {
      if (current.value < x) {
        dum1Cur.next = current;
        current.before = dum1Cur;
        dum1Cur = dum1Cur.next;
        current = current.next;
        dum1Cur.next = null;
      } else {
        dum2Cur.next = current;
        current.before = dum2Cur;
        dum2Cur = cum2Cur.next;
        current = current.next;
        dum2Cur.next = null;
      }
      current.prev = null;
    }
    dummy2.head = dummy2.head.next;
    dum1Cur.next = dummy2.head;
    dummy2.head.prev = dum1Cur;
    this.head = dummy1.head.next;
  }
}

// ------------------
// 🔍 Test Cases
// ------------------

console.log('===================================');
console.log('Test Case 1: Partition around x = 5');
console.log('===================================');
const dll1 = new DoublyLinkedList(3);
dll1.push(8);
dll1.push(5);
dll1.push(10);
dll1.push(2);
dll1.push(1);
console.log('BEFORE partitionList(5):');
dll1.printList();
dll1.partitionList(5);
console.log('AFTER partitionList(5):');
dll1.printList();

console.log('\n==========================================');
console.log('Test Case 2: All nodes less than x = 5');
console.log('==========================================');
const dll2 = new DoublyLinkedList(1);
dll2.push(2);
dll2.push(3);
console.log('BEFORE partitionList(5):');
dll2.printList();
dll2.partitionList(5);
console.log('AFTER partitionList(5):');
dll2.printList();

console.log('\n==========================================');
console.log('Test Case 3: All nodes greater than x = 5');
console.log('==========================================');
const dll3 = new DoublyLinkedList(6);
dll3.push(7);
dll3.push(8);
console.log('BEFORE partitionList(5):');
dll3.printList();
dll3.partitionList(5);
console.log('AFTER partitionList(5):');
dll3.printList();

console.log('\n=============================');
console.log('Test Case 4: Empty list, x = 5');
console.log('=============================');
const dll4 = new DoublyLinkedList(1);
dll4.makeEmpty();
console.log('BEFORE partitionList(5):');
dll4.printList();
dll4.partitionList(5);
console.log('AFTER partitionList(5):');
dll4.printList();

console.log('\n=================================');
console.log('Test Case 5: Single node, x = 5');
console.log('=================================');
const dll5 = new DoublyLinkedList(1);
console.log('BEFORE partitionList(5):');
dll5.printList();
dll5.partitionList(5);
console.log('AFTER partitionList(5):');
dll5.printList();
