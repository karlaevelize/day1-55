//FUNCTIONS
//1. It's a set of commands, we can perfom any kind of operations
//2. It prevents us from repeating code
//3. Functions take parameters (not always), they can have any data type
//4. A function returns something (or not)

// Whats the difference of console.log and return?
//1. With the return, we can get that value out of the function
//2. With console.log, we get undefined when trying to get the value out


function sayHello(){
  console.log("Hello") //we can't access this value later, it will return undefinend
}

const sayHi = () => {
  return "Hi"
}

//const hello = sayHello()
//const hi = sayHi()

// console.log("my functions:", hello, hi) //undefined, hi

const sayHiToSomeone = (name, age) => { //parameters
  console.log(`Hello ${name}, you are ${age} years old`)
}

// sayHiToSomeone("Sheyla", 20) //arguments

//ARROW FUNCTIONS
//1. Function keyword goes away
//2. Declare a const example = () => { write the statements }
//3. Benefits? Shorter, easier to read, compact

const sayHelloToArrowFunction = () => console.log("Hello, Arrow Function")

//THE SAME AS THE FUNCTION ABOVE
// function sayHelloToArrowFunction() {
//   console.log("Hello, Arrow Function")
// }