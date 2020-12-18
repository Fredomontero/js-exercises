/**
 * Function that finds the node at the beginning of a loop in a singly LinkedList
 * 
 * @param {ListNode} node Head node of a LinkedListto perform the search for the starting node of the loop
 */
const findStartingLoopNode = (node) => {
  let ptr1 = node;
  let ptr2 = node;
  do{
    ptr1 = ptr1.next;
    ptr2 = ptr2.next.next;
  }while(ptr1 && ptr2 && ptr1.next && ptr2.next && ptr2.next.next && ptr1 !== ptr2)
  if(ptr1 === ptr2){
    ptr1 = node;
    while(ptr1 !== ptr2){
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    }
    return ptr2;
  }
  return null;
}

module.exports = findStartingLoopNode;