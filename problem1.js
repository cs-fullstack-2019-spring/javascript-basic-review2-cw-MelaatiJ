// Ask the user for 5 numbers. Print the sum of the 5 numbers.
//i am asking for five numbers
var numb1 = parseInt(prompt("pick a number"));

var numb2 = parseInt(prompt("pick a number"));

var numb3 = parseInt(prompt("pick a number"));

var numb4 = parseInt(prompt("pick a number"));

var numb5 = parseInt(prompt("pick a number"));


//creating a function that would add the numbers together
function sumofFiveNumber(numb1, numb2, numb3, numb4, numb5)
{
    console.log(numb1 + numb2 + numb3 + numb4 + numb5);
}
//calling my function
sumofFiveNumber(numb1, numb2, numb3, numb4, numb5);