let score = "32";
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
score = "33abc";
valueInNumber = Number(score); // not pure number
console.log(valueInNumber);
console.log(typeof valueInNumber);
console.log(typeof undefined);
// in number:-
// "33"=> 33, "33abc"=> NaN, true=> 1, null=> 0, undefined=NaN

// in boolean
// 1=> true, ""=> false, "kunal"=> true

// in string
// 33=>"33",