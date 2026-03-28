//console.log(this); in global scope, this refers to the global object (window in browsers)
// but {} in node envionment

function acha()
{
    let username = "Mehul";
    // console.log(this);
    // still no access to this.username, because this is not referring to the function scope, it is referring to the global scope, and in global scope there is no username variable
}
acha();


const acha2 = () => { // arrow functions do not have their own 'this' context, they inherit 'this' from the surrounding scope
    let username = "Mehul";
    console.log(this);

}

//has a feature of implicit return, if there is only one expression in the function body, we can omit the curly braces and the return keyword
const add = (a, b) => a + b; // no curly braces, no return keyword, implicit return
console.log(add(5, 10)); // 15

//objects have to be returned in parentheses, otherwise it will be treated as a block of code and not an object
const createUser = (name, age) => ({ name: name, age: age });