
let age = prompt("Enter your age:");

age = Number(age);

if (age >= 18) {
    alert("You are eligible.");
    document.write("You are eligible to vote.");
} 
else {
    alert("You are not eligible.");
    document.write("You are not eligible to vote.");
}

// Using ternary operator
let result = age >= 18 
    ? "Eligible to vote" 
    : "Not eligible to vote";

document.write("<br>" + result);
