//question 1//


//question 2//


//question 3//
var user = +prompt("Enter Number");
var value = Math.abs(user);
document.write("the absolute value of " + user + " is: " + value);

//question 4//
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);

document.write("<h2> dice number :" + numberOfStars + "</h2><br>");

//question 5//
var userName = prompt("Enter Your Name:");
var userInput = prompt("Enter H/T:").toUpperCase();
var arr = ["H", "T"]
var randomNum = arr[Math.floor(Math.random() * arr.length)]

if (userInput === randomNum) {
    alert(userName + " win");
} else {
    alert(userName + " lost");
}

//question 6//
var random = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32, 33,34,35,36,37,38,39,40,
41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,
84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
    
for (var i = 0; i < 1; i++) {
var randomNum = Math.floor(Math.random() * random.length);
document.write("Random Number Between 1 and 100 is: " + random[randomNum]);
}

//question 7//


//question 8//
var user = +prompt("Enter Number between 1 and 10")
var num = 7;


if (user === num) {
    alert("Congratulations! You guess right.")
}
else{
    alert("Sorry! Try Again.")
}