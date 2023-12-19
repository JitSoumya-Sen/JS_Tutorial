/*
const name = "Soumya"
const title = "sen"
const id = 2003

console.log(`Hi I am ${name} ${title} and my id is ${id}`);

const myname = new String("Soumya") 

console.log(name.__proto__); // {}

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

console.log(name == myname); // true
console.log(name === myname); // false as different data type

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"

console.log(eval(s2.valueOf())); // returns the number 4
//A String object can always be converted to its primitive counterpart with the valueOf() method.

const str1 = new String(true)
console.log(str1);
const str2 = new String(Symbol("123")) // Throws typeerror
*/
const str3 = 'The quick brown fox jumps over the lazy dog.';

console.log(str3.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str3.slice(-9, -5));
// Expected output: "lazy"

console.log(str3.substring(2,5)); // e q
console.log(str3.replace("quick","Not quick"));
console.log(str3.includes('fox')); // true
console.log(str3.split(" ",3)); // Split into 3 pieces