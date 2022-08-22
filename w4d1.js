class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
/**
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top and removed items are removed from the top.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.top = null;
        this.length = 0;
    }

    display(){
        let nextNode = this.top;
        let itemIndex = 0
        while(nextNode){
            console.log("Item " + itemIndex + ": "+nextNode.data)
            nextNode = nextNode.next;
            itemIndex++;
        }
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        if(this.top == null){
            return true;
        } else {
            return false;
        }
    }
    
    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        return this.top;
    }
    
    peekAtIndex(index){
        if(this.size() < index){
            return null;
        }
        let thisNode = this.top;
        for(var i = 0; i < index; i++){
            thisNode = thisNode.next;
        }
        return thisNode;
    }

    peekAtValue(value){
        let thisNode = this.top;
        for(var i = 0; i < this.length; i++){
            if(thisNode.data == value){
                return "True at position " + i
            }
            thisNode = thisNode.next
        }
            return false;
        }
    
    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        if(this.isEmpty()){
            return undefined;
        } else {
            let oldTop = this.top;
            this.top = oldTop.next;
            this.length--;
            return oldTop;
        }
    }

    /**
     * Adds a new given item to the top of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        let newNode = new StackNode(item);
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this.length;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.length;
    }
}

let plateStack = new Stack();

plateStack.push("item");
plateStack.push("itme");
plateStack.push("mite");
plateStack.push("time");
plateStack.push("WHAT");
plateStack.push("HEY");
plateStack.push("PHONE");
plateStack.push("UNIQUE");
console.log(plateStack.peek());
plateStack.display();
console.log(plateStack.peekAtValue("WHAT"));