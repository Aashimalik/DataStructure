/**
Given the head of a singly linked list, reverse the list, and return the reversed list.

leetcode: 206
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Method 1 Iterative
var reverseList = function(head) {
    let prevNode = null;
    while(head!==null) {
      const nextNode = head.next;
      head.next = prevNode;
      prevNode = head;
      head = nextNode
    }

    return prevNode;
};

// Method 2 Recursive
var reverseList2 = function(head, previous = null) {
    if (head === null) return previous;
    let next = head.next;
    head.next = previous;
    return reverseList(next, head);
};