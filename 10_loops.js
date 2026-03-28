// for of loop
let arr = [1, 2, 34, 4, 5];
for (let i of arr) {
    console.log(i);
}

// for in loop
let obj = {
    name: "Mehul",
    age: 19,
    islogin: false
}
// for (let key in obj) {
//     console.log(key, obj[key]);
// }
// for in loop is used to iterate over the properties of an object, it returns the keys of the object, and we can access the values using the keys
//can not use for in loop for map and set, because they are not objects, they are iterable objects, we can use for of loop for them
let map = new Map();
map.set("name", "Mehul");
map.set("age", 19);
map.set("islogin", false);

// for each loop for map
// map.forEach((value, key) => {
//     console.log(key, value);
// });

// for of loop for map
for (let [key, value] of map) {
    console.log(key, value);
}
// for each loop in array
let arr2 = [1, 2, 3, 4, 5];
arr2.forEach((value, index, x,y = 'abc') => {
    console.log(index, value,x,y);
}); 

//filter method in array
let arr3 = [1, 2, 3, 4, 5];
let filteredArr = arr3.filter((value) => value % 2 === 0);
console.log(filteredArr); // [2, 4]



const mytotal = arr3.reduce((acc,cur) => acc + cur,0); // 15
let doubledArr3 = arr3.map((item) => (item * 2));
console.log(doubledArr3);
console.log(mytotal);