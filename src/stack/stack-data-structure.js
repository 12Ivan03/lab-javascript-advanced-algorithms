class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

  //compare the two values to see it max-size it full
    let contolStack = this.stackControl;
    let maxAmounth = this.MAX_SIZE;

    if (contolStack.length < maxAmounth){
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
  // if stak empty - true <==> stak any items - false [>=1]
    let emptyStack = this.stackControl;

    if (emptyStack.length === 0){
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    /*
    (add to the end the item) 
    -first check - canPush? 
    -if cP true add the item to the stackControl 
    -if cP flase "stack overflow" => error 'STACK_OVERFLOW'
    */
    //let pushStack = this.stackControl;
    //let maxSize = this.MAX_SIZE;
    let callback = this.canPush();

    if (callback === true ) {
      this.stackControl.push(item)
    } else {
      console.log('STACK_OVERFLOW')
    }
  }

  pop() {
    /*
    - check stack items - call isEmpty 
    - if isEmpty - flase remove last item stackControl
    - if isEmpty - true stack UNderflow error message 'STACK_UNDERFLOW'
    */
    let callBack = this.isEmpty();

    if (callBack === false) {
      this.stackControl.pop()
    } else {
      console.log('STACK_UNDERFLOW')
    }

  }

  display() {
    // return list of items
  return this.stackControl
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
