//CONDITIONALS
//1. Depending on a statement, we execute block x or block y
//2. We can have an infinite number of conditionals


//Condition:
//if the club is open and age > 18 
// "You can come in" 
// "You can't come in"

const open = false
const age = 30

if (open && age > 17){
  console.log("Welcome!")
} else {
  console.log("You can't come in")
}

//conver this if to ternary
const canIGetIn = open && age > 17 //condition
  ? console.log("Welcome!") // if true
  : console.log("You can't come in") // else 

//Condition:  
//You need to wear a coat if it's Winter or Autumn
// Do I have to wear a coat?

const season = "winter"

if (season === "winter" || season === "autumn"){
  console.log("Put on a coat!")
} else {
  console.log("No coat needed!")
}
