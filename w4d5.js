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

    isEmpty() {
        if ( this.head ) {
            return false;
        }
        return true;
    }
    
    insertAtFront( data ) {
        let newNode = new ListNode( data );
        newNode.next = this.head;
        this.head = newNode;
        return;
    }


    removeFromFront() {
        if( !this.isEmpty){
            this.head = this.head.next;
        }
        return;
    }

    insertAtBack( data ) {
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

    display(){
        if( this.isEmpty() ){
            console.log("This list is empty!")
        } else {
            let n = 0;
            let runner = this.head;
            console.log('node ' + n + ': '+runner.data);
            while( runner.next ){
                runner = runner.next;
                n++;
                console.log('node ' + n + ': '+runner.data);
            }
        }
        return;
    }
    /**
     * Reverses this list in-place without using any extra lists.
     * - Time: (?).
     * - Space: (?).
     * @returns {SinglyLinkedList} This list.
     */
     reverse() {
        if(this.isEmpty() || !this.head.next){
            this.display()
            return this
        }//Edge cases of empty and 1 node
        var runner = this.head
        var stepDad;
        let nodeHolder = runner.next
        runner.next = null
        while(nodeHolder){
            stepDad = nodeHolder
            nodeHolder = nodeHolder.next
            stepDad.next = runner
            runner = stepDad
        }
        this.head = runner
        this.display()
        return this
    }

     /**
      * Determines whether the list has a loop in it which would result in
      * infinitely traversing unless otherwise avoided. A loop is when a node's
      * next points to a node that is behind it.
      * - Time: (?).
      * - Space: (?).
      * @returns {boolean} Whether the list has a loop or not.
      */
      hasLoop(){
        if(this.isEmpty() || !(this.head.next)){ return false }

        let singleRunner = this.head;
        let doubleRunner = this.head.next;

        while(singleRunner.next && doubleRunner.next && doubleRunner.next.next){
            singleRunner = singleRunner.next;
            doubleRunner = doubleRunner.next.next;

            if(singleRunner === doubleRunner){ return true }
        }
        return false;
    }
}

let list1 = new SinglyLinkedList();
list1.removeFromFront();
console.log(list1.isEmpty());
list1.insertAtBack("NODES");
list1.insertAtBack("class");
list1.insertAtBack("Thinking");
list1.insertAtBack("I");
list1.insertAtBack("was");
list1.insertAtBack("what");
console.log(list1.isEmpty());

list1.removeFromFront();
list1.removeFromFront();
list1.removeFromFront();
list1.insertAtFront("Hello")
list1.insertAtFront("To")
list1.insertAtFront("everyone")
list1.insertAtFront("here")

list1.display();
