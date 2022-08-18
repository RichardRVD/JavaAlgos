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

     // displays the tree
    display(current = this.root, depth = 0, polarity = []){

        if(this.isEmpty()){
            console.log("Tree is empty!")
            return;
        }

        // checks for left/right nodes
        let hasLeft = (current.left != null);
        let hasRight = (current.right != null);

        // render pipes for previous layers
        let pipes = ""
        for(var i = 0; i+1 < depth; i++){

            if(polarity[i] == "left"){
                pipes += "┃ ";
            }

            else if(polarity[i] == "right"){
                pipes += "  "
            }
        }

        // render pipes for this layer
        if(depth != 0){

            if(polarity[depth-1] == "left"){
                pipes += "┠─"
            }
            else{
                pipes += "┖─";
            }
        }


        // render current layer
        if(current.count > 1){
            console.log(pipes+current.data+ "("+current.count+")")
        }
        else{
            console.log(pipes+current.data);
        }

        // calling next leaves
        if(hasLeft){
            polarity[depth] = "left";
            this.display(current.left, depth+1, polarity);
        }

        if(hasRight){
            polarity[depth] = "right";
            this.display(current.right, depth+1, polarity);
        }
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
    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrInorder(node = this.root, vals = []) {

        if(this.isEmpty()){
            this.root = new BSTNode();
            return this;
        }
        if (node.left) {
            this.toArrInorder(node.left, vals);
        }
        vals.push(node.data);
        if(node.right){
            this.toArrInorder(node.right, vals);
        }
        return vals;
    }

    /**
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following Depth First Search preorder.
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder(node = this.root, vals = []) {
        if(this.isEmpty()){return []}
        vals.push(node.data);
        if(node.left){
            this.toArrPreorder(node.left,vals);
        }
        if(node.right){
            this.toArrPreorder(node.right, vals);
        }
        return vals;
    }

    /**
     * DFS Postorder (Left, Right, CurrNode)
     * Converts this BST into an array following Depth First Search postorder.
     * @param {Node} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPostorder(node = this.root, vals = []) {
        if(this.isEmpty()){ return [] }
        if(node.left){
            this.toArrPostorder(node.left, vals);
        }
        if(node.right){
            this.toArrPostorder(node.right, vals);
        }
        vals.push(node.data);
        return vals;
    }
    // Array created with a Breadth First Search
    toArrayLevelOrder(node = this.root){
        if(this.isEmpty()){
            return [];
        }
        let level = 0;
        let values = [];
        let moreLevels = true;
        while (moreLevels){
            let levelValues = [];
            this.toArrayLevel(this.root, level, levelValues);
            values = values.concat(levelValues);
            if(levelValues.length == 0){
                moreLevels = false;
            }
            level += 1;
        }
        return values;
    }
    // auxiliary function called by toArrayLevelOrder
    // returns an array with all nodes on given level
    // level 0 is the root node.
    toArrayLevel(node = this.root, level, values = []){
        if (level == 0){
            values.push(node.data);
            return;
        }
        if (node.left) {
            this.toArrayLevel(node.left, level - 1, values);
        }
        if (node.right) {
            this.toArrayLevel(node.right, level - 1, values);
        }
        return values;
    }

    /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
    height(node = this.root) {
        if( ! node ){
            return 0;
        }

        let leftHeight = this.height( node.left );
        let rightHeight = this.height( node.right );

        if( leftHeight > rightHeight ){
            return leftHeight + 1;
        }
        return rightHeight + 1;
    }
    isFull(node = this.root) {
        if( ! node ){
            return true;
        }
        if( !node.left && node.right || node.left && !node.right ){
        //if( !((!!node.left)*(!!node.right))){
            return false;
        }

        let leftBool = this.isFull( node.left );
        let rightBool = this.isFull( node.right );

        if( leftBool && rightBool ){
            return true;
        }
        return false;
    }
}

newTree = new BinarySearchTree();
var tempNode = new BSTNode(5);
// newTree.left = tempNode;
console.log(newTree.insert(8));
console.log(newTree.insert(2));
// console.log(newTree.insert(3));
// console.log(newTree.insert(4));
// console.log(newTree.insert(9));
console.log(newTree.range(tempNode));
console.log(newTree.insert(1));
// console.log(newTree.insert(7));
// console.log(newTree.insert(13));
// console.log(newTree.insert(12));
// console.log(newTree.insert(16));
console.log(newTree.display());
console.log(newTree.toArrInorder());
console.log(newTree.height());
// console.log(newTree.containsRecursive(917));
// console.log(newTree.containsRecursive(91));