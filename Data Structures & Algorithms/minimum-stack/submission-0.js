class MinStack {
    constructor() {
        this.head = {};
        this.head.prev = null;
        this.head.next = null;
        this.head.val = null;
        
        this.tail = this.head;
        this.tail.next =  null;

        this.smallest = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        // this has to be a new node and be placed in the list
        
        let newNode = {};

        newNode.prev = null;
        newNode.next = null;
        newNode.val = val;
        
        this.tail.next = newNode;
        newNode.prev = this.tail;

        this.tail = newNode;
        
        // now in our stack if the smallest is non existant or greater than the top we remove
        if ( this.smallest.length === 0 || this.smallest[this.smallest.length -1] > val) {
            this.smallest.push(val);
        } else {
            this.smallest.push(this.smallest[this.smallest.length - 1])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        
        this.tail = this.tail.prev;
        this.tail.next = null;

        this.smallest.pop();
    }

    /**
     * @return {number}
     */
    top() {
        console.log(this.tail, "TAIL")
        return this.tail.val;
    }

    /**
     * @return {number}
     */
    getMin() {
        console.log(this.smallest)
        return this.smallest[this.smallest.length -1 ];
    }
}
