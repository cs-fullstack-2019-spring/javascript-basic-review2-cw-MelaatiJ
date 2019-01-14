// Create a function that returns 5 more than the integer sent to it. Assume the user only enters integers.
//     Create a different function that adds " is awesome" to any strings sent to it.
// <strong>Challenge:</strong> If the wrong data type is sent to one of the functions print "ERROR".
//


var number = parseInt(prompt("put in a number"));

function numberPlusFive(input)
{

    if (number === isNaN(input)
    {
        return "error"
    }
    else

 {

     return  input + 5
 }
}

var input = parseInt(promp("put in a number"));
console.log(numberPlusFive(input));

function awesome(string)
{
    if(isNaN(string))
    {
        return "error"
    }
    else
        {
        return (string + "is awesome")
    }
}
var string = prompt("what is your favorit color");
console.log (awesome(string));