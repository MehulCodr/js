// object literals
const mysym = Symbol("key1");
const user1 = { // object literal
    name: "kunal",
    age: 18,
    [mysym]: "acha",
    location: "delhi",
    "full name": "kunal thakur"
}
console.log(user1.age);
// another method of access
console.log(user1["age"]); // age is a type of string, so we have to pass like string only
console.log(user1["full name"]); // can't access with dot operator
console.log(user1[mysym]); // this is not string
console.log(typeof mysym);
user1.age = 19;
//Object.freeze(user1); // we can't change the object now
user1.age = 22;
console.log(user1.age); // will print 19
// if we freeze the object, we can't make any changes and can't make functions
user1.greetings = function() {
    console.log("hello i am function");
}
user1.greetings()
console.log(user1.greetings); // [function (anonymous)]
console.log(user1.greetings());
user1.greetings2 = function() {
    console.log(`hello thakur saab, ${this.age}`);
}
user1.greetings2()