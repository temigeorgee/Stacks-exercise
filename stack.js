class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.size === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.first.next = newNode;
            this.first = newNode;
        }
        // this.printNodes(newNode);
        this.size++;
        return this.size;
    }

    pop(){
        if(this.size === 0) return
        let removedNode = this.first;
        let newFirst = this.last.next;
        if(!newFirst){
            this.last = newFirst;
        }
        this.first = newFirst;
        removedNode.next = null;
        this.size--;
        return removedNode.value;
    }

    peek(){
        if(this.size === 0) return
        return this.first.value;
    }

    printNodes(value){
        let myNodes = [];
        myNodes.push(value);
        console.log(myNodes);
    }
}
