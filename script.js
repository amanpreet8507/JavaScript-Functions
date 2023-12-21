/*
Question 1
Write a function called avg that...

Takes 3 numbers as parameters
Computes the average of the 3 numbers
Returns that average
 */
console.log("Part 1")
function avg(num1, num2, num3){
    let average = (num1 + num2 + num3) / 3
   return average
}
console.log(`The average of 1, 2, 3 is: ${avg(1, 2, 3)} .`)

/*
Question 2
Test your function by doing the following:

Create a test set of 3 numbers, compute the average by hand
Call your function and pass in the numbers as arguments
Store the value returned from your function as a variable
Print the returned value, stored in a variable, using console.log
 */
console.log("Part 2")
let var1 = `The average of 4, 5, 6 is:  ${avg(4, 5, 6)} .`

let var2 = `The average of 7, 8, 9 is:  ${avg(7, 8, 9)} .`

let var3 = `The average of 10, 11, 12 is: ${avg(10, 11, 12)} .`

console.log(var1)
console.log(var2)
console.log(var3)

/*
Question 3
Write a function called isEqual that...

Takes two strings as parameters
Compares the two strings for equivalence
Returns true if they are the same string, false if they are not the same string
 */
console.log("Part 3")
function isEqual(string1, string2){
    if(string1 === string2){
        return true
    }else{
        return false
    }
}

/*
Question 4
Test your function by doing the following:

Create a test-set of strings that should return true
Create a test-set of strings that should return false
Store the value returned from your function as a variable
Print the returned value, stored in a variable, using console.log
 */
console.log("Part 4")
let test1 = (`string1 = Dog and string 2 = Dog. So it's:  ${isEqual("Dog", "Dog")}`)
let test2= (`string1 = Dog and string2 = Cat. So it's:  ${isEqual("Dog", "Cat")}`)

console.log(test1);
console.log(test2);


/* Question 5 
Write a function called output that...

Takes one parameter
console.logs the passed parameter
Returns nothing
Test your function by checking the chrome console for your output
*/
console.log("Part 5")

function output(string){
    console.log(`Consoling using empty return: ${string}`)
    return;
}
output("String: Amanpreet")

