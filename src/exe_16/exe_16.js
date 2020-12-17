// const LinkedList = require('./LinkedList');
// const ListNode = require('./ListNode');

// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(2);
// let node4 = new ListNode(3);
// let node5 = new ListNode(3);
// let node6 = new ListNode(6);
// let node7 = new ListNode(7);
// let node8 = new ListNode(2);
// let node9 = new ListNode(1);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// node6.next = node7;
// node7.next = node8;
// node8.next = node9;
// node9.next = node7;

// let list = new LinkedList(node1);

const findStartingLoopNode = (node) => {
  let ptr1 = node;
  let ptr2 = node;
  while(ptr1 && ptr2 && ptr2.next){
    ptr1 = ptr1.next;
    ptr2 = ptr2.next.next;
    if(ptr1 === ptr2){
      ptr1 = node;
      while(ptr1 !== ptr2){
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      }
      return ptr2;
    }
  }
  return null;
}

module.exports = findStartingLoopNode;

// let node = findStartingLoopNode(list.head);
// console.log("The starting node of loop is: ", node);