//Chp 21-25//
//question 1//
var firstName = prompt("First Name");
var lastName = prompt("Last Name");
var fullName = firstName + " " + lastName ;
alert(fullName);

//question 2//
var user = prompt("Your's Favourite Mobile Phone");
document.write("My favourite phone is " + user + "<br>Length of String is " + user.length);

//question 3//
var text = "Pakistani" ;
document.write("String: " + text + "<br>Index of n: " + text.indexOf("n"));

//question 4//
var text = "Hello World" ;
document.write("String: " + text + "<br>Index of l: " + text.lastIndexOf("l"));

//question 5//
var text = "Pakistani" ;
document.write("String: " + text + "<br>Character at index 3: " + text.charAt(3));

//question 6//
var firstName = prompt("First Name");
var lastName = prompt("Last Name");
var fullName = firstName.concat(" " + lastName) ;
alert(fullName);

//question 7//
var city1 = "Hyderabad";
var city2 = city1.replace("Hyder" , "Islam") ;
console.log(city1);
console.log(city2);

//question 8//
var message1 = "Ali and Sami are best friends. They play cricket and football together."
var message2 = message1.replace(/and/g , "&");
document.write(message1 + "<br>");
document.write(message2);

//question 9//
var string = "472"
console.log(Number("472"))
document.write("Value: " + string + "<br>Type:String <br>");
var number = 472
document.write("Value: " + number + "<br>Type:Number");

//question 10//
var user = prompt("Type Anthing");
document.write("User Input: " + user + "<br>Uppercase: " + user.toUpperCase());

//question 11//

//question 12//
var num = 35.36
console.log(num.toString());
document.write("Number: " + num + "<br>Result: 35.36");
//question 13//

//question 14//
var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
var user = prompt ("Welcome to ABC bakery. What do yo want to order sir/ma'am").toLowerCase();
var index = arr.indexOf(user); 

if (arr.indexOf(user));
if(index !== -1){
    document.write(arr [index] + " is available in our bakery") ;
}
else{
    document.write("we are sorry " + user + " is not available in our bakery");
}

//question 15//

//question 16//
var text = "University of Karachi"; 
console.log(text.split(""));

//question 17//
var user = prompt("type anything");
console.log(user.split("")[7]);
document.write("user input: " + user + "<br>Last character of an input: " + user.split("")[7]);

//question 18//

