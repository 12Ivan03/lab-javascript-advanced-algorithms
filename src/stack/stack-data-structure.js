class Stack {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }

  canPush() {

  //compare the two values to see it max-size it full
  // * .this * ==> it says this refers directly to the stackControl... there were many exponation what it menas in different contexts. I have desided to use it in this way (correct or not), because I do not understand it complaetely. 
    
    let contolStack = this.stackControl;
    let maxAmounth = this.MAX_SIZE;

    if (contolStack.length < maxAmounth) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
  // if stak empty - true <==> stak any items - false [>=1]

    let checkStackControl = this.stackControl; 

    if (checkStackControl.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  push(item) {
    /*
    (add to the end the item) 
    -first check if stack - canPush? 
    -if cP true add the item to the stackControl 
    -if cP flase "stack overflow" => error 'STACK_OVERFLOW'
    */
    //let pushStack = this.stackControl;
    //let maxSize = this.MAX_SIZE;

    let checkStackCanPush = this.canPush();

    if (checkStackCanPush === true ) {
      this.stackControl.push(item);
      return this.stackControl;
    } else {
      throw new Error ('STACK_OVERFLOW'); // copy pased it from mdn web docs... What is the difference between this and console.log() - Don't they display the same message? 
    }
  }

  pop() {
    /*
    - check stack items - call isEmpty 
    - if isEmpty - flase remove last item stackControl
    - if isEmpty - true stack UNderflow error message 'STACK_UNDERFLOW'
    */

    let checkStackItems = this.isEmpty();

    if (checkStackItems === false) {
      return this.stackControl.pop();
    } else {
      throw new Error ('STACK_UNDERFLOW');
    }

  }

  display() {
    // return list of items

  return this.stackControl;
  }  
}

// This is required to enable the automated tests, please ignore it.
if (typeof module !== 'undefined') module.exports = Stack;
