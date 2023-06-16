/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {

  Calculator(){
    this.result = 0;
  }

  add(num) {
    this.result = this.result + num;
  }

  subtract(num) {
    this.result = this.result - num;
  }

  multiply(num) {
    this.result = this.result * num;
  }

  divide(num) {
    if(num === 0)
    throw new Error('Division not possible');
    this.result = this.result / num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  performOperation(op1, op2, operator) {
    if(operator === '+')
      return (op1 + op2);
    else if(operator === '-')
      return (op1 - op2);
    else if(operator === '*')
      return (op1 - op2);
    else if(operator === '/') // Check error case
      return (op1 - op2);
  }

  calculate(str) {
    10 + 2 * (6 - (4 + 1) / 2) + 7

    const stack = [];

    for(let i=0;i<str.length ; i++) {
      if(str[i] === ' ')
        continue;

      if(str[i] === 'a')
        throw new Error('Non numerical character is present');

      if(str[i] === '(')
        stack.push(str[i]);
      else if(str[i] === '+' || str[i] === '-' || str[i] === '*' || str[i] === '/')
        stack.push(str[i]);
      else if(str[i] === ')') {
        const op2 = stack.pop();
        const operator = stack.pop();
        const op1 = stack.pop();
        stack.pop(); // Removes opening brackets
        stack.push(performOperation(op1,op2,operator));
      }
    }
    
  }

}

module.exports = Calculator;
