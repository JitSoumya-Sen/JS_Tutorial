/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); // Only Comparison operators treats null as zero then compare it

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
*/
// === 
// Conceptually, undefined indicates the absence of a value, while null indicates the absence of an object

console.log("2" === 2);
console.log("2" == 2);
console.log("true" == true);

/* In the case of == operator

If either operand is a string, the other operand will be converted to a string.
If either operand is a number, the other operand will be converted to a number.
If either operand is a boolean, it will be converted to a number (true becomes 1 and false becomes 0).
If one operand is an object and the other is a primitive value, the object will be converted to a primitive value before the comparison is made.
If one of the operands is null or undefined, the other must also be null or undefined to return true. Otherwise it will return false.
*/