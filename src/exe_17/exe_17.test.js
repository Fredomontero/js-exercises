const { expect } = require('@jest/globals');
const LinkedList = require('./LinkedList');
const ListNode = require('./ListNode');
const isPalindrome = require('./exe_17');

test("should return true", () => {
  let node1 = new ListNode(1);
  let node2 = new ListNode(2);
  let node3 = new ListNode(3);
  let node4 = new ListNode(2);
  let node5 = new ListNode(1);

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

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
  let node1 = new ListNode("psds");
  let node2 = new ListNode("e");
  let node3 = new ListNode("rsdjk");
  let node4 = new ListNode("r");
  let node5 = new ListNode("ooooo");

  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;

  let list = new LinkedList(node1);
  const result = isPalindrome(list.head);
  expect(result).toBe(false);
});

test("should return true", () => {
  let node1 = new ListNode("Hello");
  let node2 = new ListNode("World");
  let node3 = new ListNode("Hello");

  node1.next = node2;
  node2.next = node3;

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

test("should return true", () => {
  let node1 = new ListNode("Hello");
  let node2 = new ListNode("Hello");

  node1.next = node2;

  let list = new LinkedList(node1);
  const result = isPalindrome(list.head);
  expect(result).toBe(true);
});