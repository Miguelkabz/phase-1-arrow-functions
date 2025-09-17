//as a function expression called divide
 //   2) divide divides 2000 by 100
   // 3) has an arrow function called square
 //   4) square arrow function takes one parameter and multiplies it times itself
   // 5) has an arrow function called add
 //   6) add arrow function takes two parameters and adds them together

const divide = function() {
    return 2000 / 100;
};

const square = (a)=> a * a; 

const add = (a, b) => a + b;


console.log(divide());
console.log(square(5));
console.log(add(3, 4));