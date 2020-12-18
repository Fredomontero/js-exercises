/**
 * Function that verifies if the content of a single linked list is a palindrome
 * 
 * @param {ListNode} node - Head node of Linked List 
 */
const isPalindrome = (node) => {
  let stack = [];
  let ptr1 = node;
  let ptr2 = node;
  let count = (node.data !== " ") ? 1 : 0;
  let visited = (node.data !== " ") ? 1 : 0;
  if(node.data !== " ") stack.push(node.data);
  while(ptr1 && ptr2 && ptr2.next){
    ptr2 = ptr2.next;
    if(ptr2 && ptr2.data !== " ") count++;
    ptr2 = ptr2.next;
    if(ptr2 && ptr2.data !== " ") count++;
    ptr1 = ptr1.next;
    if(ptr1.data !== " "){
      visited++;
      stack.push(ptr1.data);
    } 
  }
  console.log("Ptr1.data: ", ptr1.data);
  console.log("Count: ", count);
  console.log("Stack: ", stack);
  if(count - visited !== visited) stack.pop();
  console.log("Stack: ", stack);
  while(stack.length > 0){
    ptr1 = ptr1.next;
    if(ptr1.data !== " ")
      if(ptr1.data !== stack.pop()) return false;
  }
  return true;
}

module.exports = isPalindrome;