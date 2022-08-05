/**
   * Calls insertAtBack on each item of the given array.
   * - Time: O(n * m) n = list length, m = arr.length.
   * - Space: O(1) constant.
   * @param {Array<any>} vals The data for each new node.
   * @returns {SinglyLinkedList} This list.
   */

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

    insertAtBack(data){
        var newNode = new Node(data);
        if(this.isEmpty()){
            this.head = newNode;
        } else {
            var nodeHead = this.head; 

            while(nodeHead.next){
                nodeHead = nodeHead.next;
            }
            nodeHead.next = newNode;
        }
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

    seedFromArray(values){
        this.head = null;
        for (let value of values){
          this.insertAtBack(value);
        }
      }


/**
    * Converts this list into an array containing the data of each node.
    * - Time: O(n) linear.
    * - Space: O(n).
    * @returns {Array<any>} An array of each node's data.
    */
 toArr() {
    var newArr = [];
    let runner = this.head;
    while (runner) {
        newArr.push(runner.value);
        runner = runner.next;
    }
    return newArr;
}
/**
   * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @param {?ListNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SinglyLinkedList} This list.
   */
 insertAtBackRecursive(data, runner = this.head) {
    if(runner == null){
        runner = new ListNode(data);
        return runner;
    }
    else if(runner.next == null){
        runner.next = new ListNode(data)
        return runner.next;
    }
    this.insertAtBackRecursive(data, runner.next);
}
}
 var arr1 = [1,2,3,4];
 singleLinkedList.insertAtBack(2);
 singleLinkedList.insertAtBack(3);
 singleLinkedList.insertAtBack(4);
 singleLinkedList.insertAtBack(5);
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}