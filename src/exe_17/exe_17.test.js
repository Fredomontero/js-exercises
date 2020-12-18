const { expect } = require('@jest/globals');
const LinkedList = require('./LinkedList');
const ListNode = require('./ListNode');
const isPalindrome = require('./exe_17');

test("should return true", () => {
  let node1 = new ListNode("a");
  let node2 = new ListNode("t");
  let node3 = new ListNode("a");
  let node4 = new ListNode("r");
  let node5 = new ListNode(" ");
  let node6 = new ListNode("a");
  let node7 = new ListNode(" ");
  let node8 = new ListNode("l");
  let node9 = new ListNode("a");
  let node10 = new ListNode(" ");
  let node11 = new ListNode("r");
  let node12 = new ListNode("a");
  let node13 = new ListNode("t");
  let node14 = new ListNode("a");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  node8.next = node9;
  node9.next = node10;
  node10.next = node11;
  node11.next = node12;
  node12.next = node13;
  node13.next = node14;

  let list = new LinkedList(node1);
  const result = isPalindrome(list.head);
  expect(result).toBe(true);
});

test("should return true", () => {
  let node1 = new ListNode("n");
  let node2 = new ListNode("a");
  let node3 = new ListNode("d");
  let node4 = new ListNode("a");
  let node5 = new ListNode("n");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  let list = new LinkedList(node1);
  const result = isPalindrome(list.head);
  expect(result).toBe(true);
});

test("should return true", () => {
  let node1 = new ListNode("r");
  let node2 = new ListNode("e");
  let node3 = new ListNode("c");
  let node4 = new ListNode("o");
  let node5 = new ListNode("n");
  let node6 = new ListNode("o");
  let node7 = new ListNode("c");
  let node8 = new ListNode("e");
  let node9 = new ListNode("r");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  node8.next = node9;

  let list = new LinkedList(node1);
  const result = isPalindrome(list.head);
  expect(result).toBe(true);
});

test("should return false", () => {
  let node1 = new ListNode("p");
  let node2 = new ListNode("e");
  let node3 = new ListNode("r");
  let node4 = new ListNode("r");
  let node5 = new ListNode("o");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  let list = new LinkedList(node1);
  const result = isPalindrome(list.head);
  expect(result).toBe(false);
});

test("should return true", () => {
  let node1 = new ListNode(" ");
  let node2 = new ListNode(" ");
  let node3 = new ListNode(" ");
  let node4 = new ListNode(" ");
  let node5 = new ListNode(" ");
  let node6 = new ListNode(" ");
  let node7 = new ListNode(" ");
  let node8 = new ListNode("a");
  let node9 = new ListNode("n");
  let node10 = new ListNode("a");
  let node11 = new ListNode(" ");
  let node12 = new ListNode(" ");
  let node13 = new ListNode(" ");
  let node14 = new ListNode(" ");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  node5.next = node6;
  node6.next = node7;
  node7.next = node8;
  node8.next = node9;
  node9.next = node10;
  node10.next = node11;
  node11.next = node12;
  node12.next = node13;
  node13.next = node14;

  let list = new LinkedList(node1);
  const result = isPalindrome(list.head);
  expect(result).toBe(true);
});

test("should return false", () => {
  let node1 = new ListNode("m");
  let node2 = new ListNode("a");
  let node3 = new ListNode("r");

  node1.next = node2;
  node2.next = node3;

  let list = new LinkedList(node1);
  const result = isPalindrome(list.head);
  expect(result).toBe(false);
});