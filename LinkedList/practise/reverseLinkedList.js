/**
* Write a Program to reverse the Linked List. (Both Iterative and recursive)
* Input: Head of following linked list
*  1->2->3->4->NULL
* Output: Linked list should be changed to,
*  4->3->2->1->NULL
*/

const reverseLinkedList = (head) => {
  let prevNode = null;
  while(head!==null) {
    const nextNode = head.next;
    head.next = prevNode;
    prevNode = head;
    head = nextNode
  }

  return prevNode;
}