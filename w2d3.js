    /**
 * Concatenates the nodes of a given list onto the back of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {SinglyLinkedList} addList An instance of a different list whose
 *    whose nodes will be added to the back of this list.
 * @returns {SinglyLinkedList} This list with the added nodes.
 */
 /**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value in the node that the list should be split on.
 * @returns {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
/**
 * Recursively finds the maximum integer data of the nodes in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {ListNode} runner The start or current node during traversal, or null
 *    when the end of the list is reached.
 * @param {ListNode} maxNode Keeps track of the node that contains the current
 *    max integer as it's data.
 * @returns {?number} The max int or null if none.
 */




class ListNode {
    constructor( data ) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }


 concat(addList) {
     if(this.isEmpty()){
         this.head = addList.head;
         return list;
     }
     let runner1 = this.head;
     while(runner1.next != null){
         runner1 = runner1.next;
     }
     let runner2 = addList.head;
     return list;
 }


splitOnVal(val) {
    var runner = this.head;
    if(this.isEmpty()){
        return null;
    } 
    while(runner.next && runner.next.value != val){
        runner = runner.next;
    }
    var son = new SinglyLinkedList();
    son.head = runner.next;
    runner.next = null;

    return son;
}


recursiveMax(runner = this.head, maxNode = this.head) {
    if(this.isEmpty()){
        return null
    }
    if(runner == null){
        return maxNode.value
    }
    if(maxNode.value < runner.value){
        return this.recursiveMax(runner.next, runner)
    }
    else return this.recursiveMax(runner.next, maxNode)
}

    insertAtBack1( data ) {

        let newNode = new ListNode( data );
        if ( this.isEmpty() ){
            this.head = newNode;
        } else {
            let runner = this.head;
            while( runner.next ){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return;
    }

    prepend(newVal, targetVal) {
        if( this.isEmpty() ){
            return false;
        }
        let newNode = new ListNode( newVal );
        if( this.head.data == targetVal) {
            newNode.next = this.head;
            this.head = newNode;
            return true
        }
        let runner = this.head;
        while( runner.next ) {
            if( runner.next.data == targetVal ) {
                newNode.next = runner.next;
                runner.next = newNode;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    moveMinToFront() {
        if( this.isEmpty() || this.head.next == null){
            return this;
        }
        
        let minNode = this.head;
        let nodeBeforeMinNode = null;
        
        let runner = this.head;
        while( runner.next ){
            if( runner.next.data < minNode.data ) {
                minNode = runner.next;
                nodeBeforeMinNode = runner;
            }
            runner = runner.next;
        }

        if( ! nodeBeforeMinNode ){
            return this;
        }
        
        let nodeAfterMinNode = minNode.next;
        minNode.next = this.head;
        this.head = minNode;
        nodeBeforeMinNode.next = nodeAfterMinNode;
        
        return this;
    }
}