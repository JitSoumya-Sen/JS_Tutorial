// Outside any function, `this` refers to the global object
const globalMessage = "Hello from the global scope";

const arrowFunc = () => console.log(this.globalMessage); //undefined
// const arrowFunc = () => console.log(this); // Logs {}

arrowFunc();  

// ************  ************

function outerFunc() {
    const name = "Bard";
  
    const innerArrowFunc = () => console.log(`My name is ${this}`); // Logs "object global"
    innerArrowFunc();
  }
  
  outerFunc();



//              ************  ************

const person = {
    name: "Alice",
    greet: () => console.log(`Hello, my name is ${this}`) // Logs "object Object"
  };
  
  person.greet();

//   The arrow function greet is defined as a method of the person object.

//   However, this inside greet does not refer to the person object itself. It inherits this from the enclosing context (which could be the global object or another function).

//   As a result, this.name is undefined in this case.

//              ************  ************

const person2 = {
    name: "Bob",
     greet: function fb() {console.log(`Hello, my name is ${this.name}`)} // print Bob
    //greet: () => console.log(`Hello, my name is ${this.name}`) // prints undefined
  };
  
//   const boundGreet = person2.greet.bind(person2);
//   boundGreet(); // Logs "Hello, my name is Bob" only in case of reg function

person2.greet();


//   The bind method is used to create a new function with a specific this value.

//   Here, boundGreet is created by binding person.greet to the person object itself.
