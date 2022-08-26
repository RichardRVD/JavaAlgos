class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    display(){
        let queueNode = this.head;
        let index = 0
        while(queueNode){
            console.log("Item" + index + ":" + queueNode.data)
            queueNode = queueNode.next;
            index++;
        }
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() { 
        if(this.head == null){
            return true;
        } else {
            return false;
        }
    }

    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(val) { 
        let newQueueNode = new QueueNode(val);
        if(this.isEmpty()){
            this.head = newQueueNode;
            this.tail = newQueueNode
        } else {
            this.tail.next = newQueueNode;
            this.tail = newQueueNode;
        }
        this.size ++;
        return this.size;
    }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() { 
        if(this.isEmpty()){
            return undefined;
        } 
        let oldQueue = this.head;
        this.head = oldQueue.next;
        if(this.size == 1){
            this.tail = null;
        }
        this.size--;
        return oldQueue;
        }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() { 
        return this.head;
    }

    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchVal) { 
        let thisQueueVal = this.head;
        for(var i =0; i < this.size; i++){
            if(thisQueueVal.data == searchVal){
                return "True at position" + " " + i;
            }
            thisQueueVal = thisQueueVal.next;
        }
        return false;
    }

    /**
     * Enqueues each of the given items.
     * - Time: O(n) linear since enqueue is O(1), n = vals.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals
     */
    seed(vals) {
        for(var i = 0; i < vals.length; i++){
            this.enqueue(vals[i]);
            this.size++;
        }
    }
    /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
    compareQueues(q2) {
        if(this.size != q2.size){
            return false;
        } else if (this.isEmpty()){
            return true;
        }
        let runner = this.head;
        let runner2 = q2.head;
        while (runner && runner2){
            if(runner.data != runner2.data){
                return false;
            }
            runner = runner.next;
            runner2=runner2.next;
        }
        return true;
    }
    

    /**
    * Determines if the queue is a palindrome (same items forward and backwards).
    * Avoid indexing queue items directly via bracket notation, instead use the
    * queue methods for practice.
    * Use only 1 stack as additional storage, no other arrays or objects.
    * The queue should be returned to its original order when done.
    * - Time: O(?).
    * - Space: O(?).
    * @returns {boolean}
    */
    isPalindrome() {}

    /**
    * Find the intersection in between 2 queues
    * If there is no intersection return a null value
    * If the is an intersection return the node where the queues intersect
    * - Time: O(?).
    * - Space: O(?).
    * @param {Queue} q2 The queue to be compared against this queue to find intersection.
    * @returns {QueueNode} Null in case of no intersection
    */
    findIntersection(q2) {}
}



var q2 = new Queue();
q2.seed([1,2,3,4]);

var q = new Queue();
q.seed([1,2,3,4]);

let line = new Queue();
line.seed([1,2,3]);

console.log(q.compareQueues(q2));
console.log(line.compareQueues(q2));
q2.display();