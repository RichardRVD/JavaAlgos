


 class singleLinkedList{
    constructor(){
        this.head = null;
    }
    isEmpty(){
        if(this.head == null){
            return true;
        } else {
            return false;
        }
    }
    class Node {
        constructor(valueInput) {
            this.value = valueInput;
            this.next = null;
        }
    }

/**
 * Removes the last node of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data from the node that was removed.
 */
 removeFromBack(){
    let runner = this.head;
    let deleted;
    if (this.isEmpty){
        return ("No values to delte!");
    }
    if (this.head.next == null){
        deleted = this.head;
        this.head = null;
        return deleted;
    }
    else if(this.head.next.next == null){
        deleted = this.head.next;
        this.head.next = null;
        return deleted;
    }
    while (runner.next.next){
        runner = runner.next;
        console.log(runner);
    }
    deleted = runner.next;
    console.log(deleted);
    runner.next = null;
    this.display();
    return deleted;
}
 /**
  * Determines whether or not the given search value exists in this list.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The data to search for in the nodes of this list.
  * @returns {boolean}
  */
  contains(val) {
    let runner = this.head;
    while (runner.next) {
        if(runner.data == val) {
            return true;
        }
        runner = runner.next;
    }
    return false;
}
 /**
  * Determines whether or not the given search value exists in this list.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The data to search for in the nodes of this list.
  * @param {?ListNode} current The current node during the traversal of this list
  *    or null when the end of the list has been reached.
  * @returns {boolean}
  */
 containsRecursive(val, current = this.head) {}
 