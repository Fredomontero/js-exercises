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
