// Create the below linked list:
// myLinkedList = {
//   head: {
//     value: 10
//     next: {
//       value: 5
//       next: {
//         value: 16
//         next: null
//       }
//     }
//   }
// };

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  /**
  * Adds a node at the end of the list.
  * @public
  * @param {any} value
  * @returns {LinkedList}
  */
  append(value) {
    let newNode = {
      value: value,
      next: null
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }


  /**
  * Adds a node at the beginning of the list.
  * @public
  * @param {any} value
  * @returns {LinkedList}
  */
  prepend(value) {
    let newNode = {
      value: value,
      next: null
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return array;
  }

  /**
  * Adds a node at a specific position.
  * @public
  * @param {number} index
  * @param {any} value
  * @returns {LinkedList}
  */
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value);
    }

    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    return this.printList();
  }

  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  /**
  * Removes a node at a specific position.
  * @public
  * @param {number} index
  * @returns {LinkedList}
  */
  remove(index) {
    // Check Parameters
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
    return this.printList();
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log(myLinkedList.printList())

