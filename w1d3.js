//A data structure that represents a list. The list is made out of "nodes". Each node will have a value and a .next. The .next of a node will point to the address of the node "behind" it in "line"

// let nums = [4,5,7,9];
//idx          0 1 2 3

//metaphor: SLL === the line at chipotle
class SLL {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        } else {
            return false;
        }
    }
    insertAtFront(valueInput) {
        //create a person/node with that valueInput
        let nextCusty = new Node(valueInput);
        nextCusty.next = this.head;
        this.head = nextCusty;
        return;
    }
    removeFromFront() {
        this.head = this.head.next;
    }
    display() {
        if (this.isEmpty()) {
            console.log("Is Empty Indeedly");
        } else {
            let runner = this.head;
            console.log(this.head.value)
            while (runner.next) {
                runner = runner.next;
                console.log(runner.value)
            }
        }
    }
}

class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

let chipotleLine = new SLL();

chipotleLine.insertAtFront("David");
chipotleLine.insertAtFront("Mack");
chipotleLine.insertAtFront("Erik");
chipotleLine.insertAtFront("Kendra");
chipotleLine.insertAtFront("Caleb");
chipotleLine.display();
console.log(chipotleLine.isEmpty());
chipotleLine.removeFromFront();
chipotleLine.display();