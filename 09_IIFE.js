//Immediately invoked function expression (IIFE)
// IIFE is a function that is executed immediately after it is defined. It is a design pattern that is used to create a new scope and avoid polluting the global scope.
// example in databases

(function acha(){
    console.log("I am an IIFE");
})(); // the function is defined and immediately invoked
// semicolon is very important before an IIFE, because if there is no semicolon and the previous line of code is not terminated properly, it can lead to syntax errors. For example:
// let x = 10
// (function(){
//     console.log("I am an IIFE");
// })() // this will throw an error because the previous line is not terminated properly, it will be treated as a function call and not an IIFE 

// we can also pass parameters to an IIFE
(function add(a, b){
    console.log(a + b);
})(5, 10); // 15

// similarily arrow functions can also be used as IIFE
((a, b) => {
    console.log(a * b);
})(5, 10); // 50

//unnamed IIFE