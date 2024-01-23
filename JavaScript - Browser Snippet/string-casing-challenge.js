// var yourName = "bharat";
// var displayName = yourName.charAt(0).toUpperCase() + yourName.slice(1);
// alert(displayName);


// 1. Take user name:
var userName = prompt("What's your First Name: ");

// 2. Capitalize the first char in user name 

// a. isolate the first character.
var firstChar = userName.slice(0,1);

// b. turn the first char to Capital.
var firstUpperChar = firstChar.toUpperCase();

// c. isolate the remaining character and make it lower case.
var restOfName = userName.slice(1, userName.length).toLowerCase();

// d. concatenate the first capital char to reamining chars
var displayName = firstUpperChar + restOfName;

// 3. Use the Capitalize version of their name to greet them using an alert:
alert("Hello, " + displayName);