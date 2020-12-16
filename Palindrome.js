/*
# Palindrome Challenge
What is Palindrome?
"A palindrome is a word, number, phrase, or other sequences of characters which reads the same 
backward as forward, such as madam, racecar."-- Wikipedia
PROBLEM:
1- Write a function that controls whether its argument is a palindrome (return true) or not (return false).
2- Rewrite the function with function expression.
3- Instead of the argument variable, use rewrite your function (and expression) with a global variable.
*/

'use strict';

// Step 1 ---------------------------------------------------------------------------------------------------------------------------------

//Checks if a given value is a string, if yes, invokes function InvokePalindrome, if not, invokes function ConverToString.
function CheckPalindrome(variable) {
    if (typeof (variable) === "string") {
        ComparePalindrome(variable);
    }
    else {
        ComparePalindrome(ConvertToString(variable));
    }
}

//Converts a given variable into a string.
function ConvertToString(variable) {
    return variable.toString();
}

//Validates if a given string is a Palindrome.
function ComparePalindrome(variable) {
    if (variable.toLowerCase() === ReverseString(variable.toLowerCase())) {
        console.log(`${variable} is a Palindrome`)
        return true;
    }
    else {
        console.log(`${variable} is not a Palindrome`)
        return false;
    }
}

//Reverse a given string
function ReverseString(variable) {
    return variable.split("").reverse().join("");
}

console.log("Step 1: ");
CheckPalindrome("Racecar");
CheckPalindrome(24424);
CheckPalindrome(123321);
CheckPalindrome("99899");




// Step 2 --------------------------------------------------------------------------------------------------------------------------


var Palindrome = function (variable) {
    if (variable.toLowerCase() === ReverseString(variable.toLowerCase())) {
        console.log(`${variable} is a Palindrome`)
        return true;
    }
    else {
        console.log(`${variable} is not a Palindrome`)
        return false;
    }
}

console.log("\nStep 2: ");
Palindrome("Raul");
