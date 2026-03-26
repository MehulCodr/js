function saymyname() {
    console.log('k');
    console.log('u');
    console.log('n');
    console.log('a');
    console.log('l');
}
//saymyname()
function add(number1, number2) {
    let result = number1 + number2
    return result
}

function login(username) {
    return `${username} lavde ne login kia h, gaand faad de uski`
}
console.log(login("kunal"));

function calculate(...num) {
    return num;
}
console.log(calculate(20, 33, 14));