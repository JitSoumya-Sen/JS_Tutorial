
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // context in user---
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // this is empty in node environment {} but not in browser

// function chai1(){
//     let username = "hitesh"
//     console.log(this.username); // N/A for function, Only applicable on object 
//     console.log(this) // This will print the global object (window)
// }

// chai1()

const chai2 = function () {
    let username = "hitesh"
    console.log(this); // This will print the global object (window)
} 
// The global object: When a function is called outside of any object, this refers to the global object (e.g., window in browsers)

const chai3 =  () => {
    let username = "hitesh"
    console.log(this);
}


chai2()
chai3() // returns {}

const obj = {
    name: "Jane",
    sayName: () => console.log(this.name) // This will print undefined because `this` refers to the global object
  };
  
  obj.sayName(); // Prints undefined
  
  const boundSayName = obj.sayName.bind(obj); // Binding `this` to the obj object
  boundSayName(); // Prints "Jane"

 


// const addTwo = (num1, num2) => {
//     return num1 + num2
// }


// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()