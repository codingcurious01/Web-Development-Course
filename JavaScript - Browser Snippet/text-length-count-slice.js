// var text = prompt("Write your text: ");

// alert("You have written " + text.length + " characters, you have " + (140 - text.length) + " characters remaining.");

var name = "Bharat";
name.slice(0, -2);

var text = prompt("Enter your text: ");

var textCount = text.length;

text = text.slice(0, 140);

if(textCount > 140)
    alert(text + "\n\nYour text had " + textCount + " characters, we have cut down to 140 characters");
else
     alert(text + "\n\nYour text has " + textCount + " characters.");

// Short Code:
alert(prompt("Enter your text: ").slice(0, 140));


// Slice with one input:
var txt = "Hello";

// only starting position.
txt = txt.slice(1);


