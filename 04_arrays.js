const arr = [0, 1, 2, 3, true, "kunal"]
const arr2 = new Array(1, 2, 3);
arr2.push(55);
console.log(arr2[3]);
console.log(arr);
arr.pop()
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift(99)
console.log(arr);
console.log(arr.includes(98));
console.log(arr.indexOf(98));
console.log(arr.indexOf(99));
const newarr = arr.join();
console.log(newarr);
console.log(typeof newarr);

const myn1 = arr.slice(1, 3); // 3 will not include
console.log(myn1);
console.log(arr);
const myn2 = arr.splice(1, 3); // 3 will include
console.log(myn2);
console.log(arr); // original array will update

let array1 = [1, 2, 3]
let array2 = [4, 5, 6]

let array3 = [...array1, ...array2] // concatenate them
console.log(array1);
console.log(array2);
console.log(array3);

console.log(Array.isArray("Kunal"));
console.log(Array.from("Kunal"));