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

/**
 * Retrieves the data of the second to last node in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
 secondToLast(){
    if(this.isEmpty()){
      return null;
    }
    let node = this.head; 
    if (node.next == null){
      return null;
    }
    while(node.next.next){
      node = node.next;
    }
    return node;
  }
 /**
  * Removes the node that has the matching given val as it's data.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The value to compare to the node's data to find the
  *    node to be removed.
  * @returns {boolean} Indicates if a node was removed or not.
  */
 removeVal(val) {
     if(this.isEmpty()){
         return false;
     }
     let runner = this.head;
     if(!runner.next){
         if(runner.next.value == val){
             this.head = null;
             return true;
         }
     }
     while(runner.next && runner.next.value != val){
         runner = runner.next;
     }
     if(!runner.next){
         return false;

     } else {
         runner.next = runner.next.next;
         return true;

     }
 }

}
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}