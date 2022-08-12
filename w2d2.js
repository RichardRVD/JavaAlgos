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






// class SingleLinkedList{
//     constructor(){
//         this.head = null;
//     }
//     insertAtBack1( data ) {
//         let newNode = new ListNode( data );
//         if ( this.isEmpty() ){
//             this.head = newNode;
//         } else {
//             let runner = this.head;
//             while( runner.next ){
//                 runner = runner.next;
//             }
//             runner.next = newNode;
//         }
//         return;
//     }
//     isEmpty(){
//         if(this.head == null){
//             return true;
//         } else {
//             return false;
//         }
//     }
//     display() {
//         if (this.isEmpty()) {
//             console.log("Is Empty Indeedly");
//         } else {
//             let runner = this.head;
//             console.log(this.head.value)
//             while (runner.next) {
//                 runner = runner.next;
//                 console.log(runner.value)
//             }
//         }
//     }

//     /**
//  * Inserts a new node before a node that has the given value as its data.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {any} newVal The value to use for the new node that is being added.
//  * @param {any} targetVal The value to use to find the node that the newVal
//  *    should be inserted in front of.
//  * @returns {boolean} To indicate whether the node was pre-pended or not.
//  */
//  prepend(newVal, targetVal) {}

//  /**
//  * Finds the node with the smallest data and moves that node to the front of
//  * this list.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @returns {SinglyLinkedList} This list.
//  */
// moveMinToFront() {
//     let runner = this.head;
//     let min = runner.value;
    
//     while (runner.next){
//         console.log(runner.value);
//         if(runner.value < min){
//             min = runner.value;
//         }
//         runner = runner.next;
        
//         console.log(runner);
//     }
//     let nextCusty = new ListNode(min);
//     nextCusty.next = this.head;
//         this.head = nextCusty;
//     // runner= this.head;
//     // let temp = runner;
//     // this.head = min;
//     // min.next = temp;
//     console.log(min);
//     while(nextCusty.next){

//         if(nextCusty.next.value == min){
//             nextCusty.next = nextCusty.next.next;
//         }
//         nextCusty = nextCusty.next;
    
//     }
// }

// removeFromBack(){
//     let runner = this.head;
//     let deleted;
//     if (this.isEmpty){
//         return ("No values to delte!");
//     }
//     if (this.head.next == null){
//         deleted = this.head;
//         this.head = null;
//         return deleted;
//     }
//     else if(this.head.next.next == null){
//         deleted = this.head.next;
//         this.head.next = null;
//         return deleted;
//     }
//     while (runner.next.next){
//         runner = runner.next;
//         console.log(runner);
//     }
//     deleted = runner.next;
//     console.log(deleted);
//     runner.next = null;
//     this.display();
//     return deleted;
// }
// }
// class ListNode{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// let d1 = new SingleLinkedList();
// d1.insertAtBack1(2);
// d1.insertAtBack1(5);
// d1.insertAtBack1(1);
// // d1.display();
// d1.moveMinToFront();
// // d1.display();