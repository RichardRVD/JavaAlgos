class BSTNode {
    constructor( data ){
        this.data = data;
        this.count = 1;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty () {
        if( this.root ){
            return false;
        }
        return true;
    }

    insert( newVal ){
        let newNode = new BSTNode( newVal )
        if( this.isEmpty() ){
            this.root = newNode;
            return this;
        }
        let runner = this.root;
        while( runner ) {
            if( newVal === runner.data ){
                runner.count++;
                return this;
            }
            if ( newVal > runner.data ){
                if( runner.right ){
                    runner = runner.right;
                } else {
                    runner.right = newNode;
                    return this;
                }
            } else {
                if( runner.left ){
                    runner = runner.left;
                } else {
                    runner.left = newNode;
                    return this;
                }
            }
        }
    }

    min( current = this.root ){
        if( this.isEmpty() ){
            return null;
        }
        while( current.left ){
            current = current.left
        }
        return current.data;
    }

    max(current = this.root){
        if( this.isEmpty() ){
            return null;
        }
        while (current.right){
            current = current.right
        }
        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if(this.isEmpty()) {return null;}
        else if (current.left != null){
            return this.minRecursive(current.left);
        }
        else return current.data;
    }

    maxRecursive(current = this.root) {
        if(this.isEmpty()) {return null;}
        else if (current.right != null){
            return this.maxRecursive(current.right);

        }
        else return current.data;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) {
        let current = this.root;
        while(current != null){
            if(searchVal > current.data){
                current = current.right;
            }
            else if (searchVal < current.data){
                current = current.left;
            }
            else if(searchVal == current.data){
                return true;
            }
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if(current == null){return false}
        else if(searchVal > current.data){
            return this.containsRecursive(searchVal, current.right);
        }
        else if (searchVal < current.data){
            return this.containsRecursive(searchVal, current.left);
        }
        else if(searchVal == current.data){
            return true;
        }
    }
        /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    // Advice: make a max() and use it together with min()
    range() {

        if ( this.isEmpty() ) {
            return null;
        }

        let max = this.max();
        let min = this.min();

        let range = max - min;

        return range;

    }

    // range(startNode) {
        
    //     if( this.isEmpty() ){
    //         return null;}
    //     // var runner = this.root;
    //     var min = this.minRecursive(startNode);
    //     var max = this.maxRecursive(startNode);
    //     console.log(min);
    //     console.log(max);

    //     return max - min;
        
    // }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @param {Node} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, current = this.root){
        if(this.isEmpty()){
            this.root = new BSTNode(newVal);
            return this;
    
        } else if(newVal > current.data && !current.right){
            current.right = new BSTNode(newVal);
            return this;
    
        } else if(newVal > current.data && current.right){
            return this.insertRecursive(newVal,current.right);
    
        } else if(newVal < current.data && !current.left){
            current.left = new BSTNode(newVal);
            return this;
    
        } else if(newVal < current.data && current.left){
            return this.insertRecursive(newVal,current.left)
        }
    }
}

newTree = new BinarySearchTree();
console.log(newTree.insert(8));
const tempNode = new BSTNode(5);
newTree.left = tempNode;
console.log(newTree.insert(2));
console.log(newTree.insert(3));
console.log(newTree.insert(4));
console.log(newTree.insert(9));
console.log(newTree.range(tempNode));
// console.log(newTree.insert(1));
// console.log(newTree.insert(100));
// console.log(newTree.insert(13));
// console.log(newTree.insert(23));
// console.log(newTree.insert(917));
// console.log(newTree.containsRecursive(917));
// console.log(newTree.containsRecursive(91));