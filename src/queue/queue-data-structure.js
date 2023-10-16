class Queue {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  canEnqueue() {
    // return true - if not full
    //return false - if full

    let stackQueueItems = this.queueControl;
    let amounthMax = this.MAX_SIZE

    if (stackQueueItems.length < amounthMax) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    // true - empty 
    // false - any items

    let CheckQueueControl = this.queueControl
    if (CheckQueueControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  enqueue(item) {
    /* to be added at the end .push() ({[ queueuControl ]})
    - check if canEnqueue can take any items 
    - if canEnqueue true - add
    - if canEnqueue flase - overflow message.
    */

    let checkIfQueueIsFull = this.canEnqueue();

    if (checkIfQueueIsFull === true) {
      this.queueControl.push(item);
      return this.queueControl;
    } else {
      throw new Error ("QUEUE_OVERFLOW");
    }
  }

  dequeue() {
    /*/ remove first element .shift()
    - call isEmpty 
    - if isEmpty false - remove shift() queueControl
    - if isEmpty true - underflow message
    */

    let checkIFQueueIsEmpty = this.isEmpty();

    if (checkIFQueueIsEmpty === false) {
      return this.queueControl.shift();
    } else {
      throw new Error ('QUEUE_UNDERFLOW');
    }
  }

  display() {

    return this.queueControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Queue;
