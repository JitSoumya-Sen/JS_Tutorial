
// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() //Returns string type values separated by commas

console.log(myArr);
console.log(newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //Returns the part of the array from the given index

console.log(myn1);
console.log("B ", myArr);


const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum"); //Remove 0 elements before index 2, and insert "drum"

// myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed is [], no elements removed

const myFish2 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed2 = myFish.splice(3, 1); // Remove 1 element at index 3

// myFish2 is ["angel", "clown", "drum", "sturgeon"]
// removed2 is ["mandarin"]

const myFish3 = ["angel", "clown", "drum", "sturgeon"];
const removed3 = myFish.splice(2, 1, "trumpet");

// myFish3 is ["angel", "clown", "trumpet", "sturgeon"]
// removed3 is ["drum"]

const myFish4 = ["angel", "clown", "trumpet", "sturgeon"];
const removed4 = myFish.splice(0, 2, "parrot", "anemone", "blue");
//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"

// myFish4 is ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// removed4 is ["angel", "clown"]

const myFish5 = ["parrot", "anemone", "blue", "trumpet", "sturgeon"];
const removed5 = myFish.splice(2, 2);

// myFish5 is ["parrot", "anemone", "sturgeon"]
// removed5 is ["blue", "trumpet"]

const myFish6 = ["angel", "clown", "mandarin", "sturgeon"];
const removed6 = myFish.splice(2);
// Remove all elements, starting from index 2
// myFish6 is ["angel", "clown"]
// removed6 is ["mandarin", "sturgeon"]

const arr = [1, , 3, 4, , 6];
console.log(arr.splice(1, 2)); // [empty, 3]
console.log(arr); // [1, 4, empty, 6]


/*
const arraylikeobj = {
    length:3,
    unrelated: "foo",
    0:[1,2,3],
    3:4,
}
console.log(Array.prototype.splice.call(arraylikeobj,0,2,2,3))
// console.log(Array.prototype.splice.call(arraylikeobj,0,3))
console.log(arraylikeobj);

const newarr = Array.from(arraylikeobj)
console.log(newarr);
*/