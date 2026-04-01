//const tinderuser = new Object(); // singleton object
const tinderuser = {}
tinderuser.id = "12345"
tinderuser.age = "28"
console.log(tinderuser);
const user = {
    age: "20",
    fullname: {
        userfullname: {
            firstname: "kunal",
            lastname: "thakur"
        }
    }
}
console.log(user.fullname.userfullname);
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
obj3 = Object.assign({}, obj1, obj2); // if we don't use {}, then all will copy in obj1 too
console.log(obj3);
// other method to merge
obj4 = {...obj1, ...obj2 }
console.log(obj4);

const c = {
    course: "Dsa"
}
const { course: sub } = c
console.log(sub);