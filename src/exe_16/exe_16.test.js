const { expect } = require('@jest/globals');
const LinkedList = require('./LinkedList');
const ListNode = require('./ListNode');
const findStartingLoopNode = require('./exe_16');

test("should return node4", () => {
  let node1 = new ListNode(1);
  let node2 = new ListNode(2);
  let node3 = new ListNode(2);
  let node4 = new ListNode(3);
  let node5 = new ListNode(3);
  let node6 = new ListNode(6);
  let node7 = new ListNode(7);
  let node8 = new ListNode(2);
  let node9 = new ListNode(1);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  node8.next = node9;
  node9.next = node4;

  let list = new LinkedList(node1);
  let node = findStartingLoopNode(list.head);

  expect(node).toBe(node4);
});