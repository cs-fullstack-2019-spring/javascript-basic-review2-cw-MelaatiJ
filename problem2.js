//Ask the user to enter a 4 digit code.
// Ask the user to enter the password again.
// If the passwords are the same print "Password is set."
// If the passwords are different print "ERROR, Passwords are different."

//setting two variables with whatever they put in.
var secretCode = prompt("Enter a 4 digit code");
var secretCode2 = prompt("Re-enter 4 digit code");

if (secretCode === secretCode2)
{
    console.log("Password is set");
}
else
{
    console.log("Passwords are different")
}