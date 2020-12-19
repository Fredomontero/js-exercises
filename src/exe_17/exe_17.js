
/**
 * Function that verifies if the content of a single linked list is a palindrome
 * 
 * @param {ListNode} node - Head node of Linked List 
 */
const isPalindrome = (node) => {
  let stack = [];
  let ptr1 = undefined;
  let ptr2 = undefined;
  do{
    ptr1 = (ptr1 === undefined ) ? node : ptr1.next;
    stack.push(ptr1.data);
    ptr2 = (ptr2 === undefined) ? node : ptr2.next.next;
  }while(ptr1 && ptr2 && ptr2.next && ptr2.next.next);
  if((stack.length % 2 !== 0 && stack.length > 1) || stack.length >= 2) stack.pop();
  while(stack.length > 0){
    ptr1 = ptr1.next;
    if(ptr1.data !== stack.pop()) return false;
  }
  return true;
}

module.exports = isPalindrome;