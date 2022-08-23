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
            line.enqueue(vals[i]);
        }
     }
  }

  let line = new Queue();

  line.enqueue("Look");
  line.enqueue("Book");
  line.enqueue("Cook");
  line.enqueue("Hook");
  line.display();
  line.dequeue();
  line.display();
  console.log(line.contains("Hook"));
  line.seed([1,2,3,4]);
  line.display();
  line.seed(["Hi", "This", "Looks", "Like", "it", "Works"]);
  line.display();