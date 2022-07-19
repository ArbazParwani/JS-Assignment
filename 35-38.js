//question 1
function time(){
    var currentTime = new Date();
    console.log(currentTime);
}
time();

//question 2
function greet(){
    var firstName =prompt("Enter your first name") ;
    var lastName =prompt("Enter your last name") ;
    console.log(firstName +" "+lastName);
}
greet();

//question 3
function sum(a,b){
    var sum1 = +prompt("Enter First Number");
    var sum2 = +prompt("Enter last Number");
    console.log(sum1 + sum2)
}
sum();

//question 4
function calc(num1,num2,opt){
    var ans;
 
    if (opt === "+"){
        ans = num1 + num2
    }
    else if (opt === "-"){
        ans =num1 - num2
    }
    else if (opt === "*"){
        ans =num1 * num2
    }
    else if (opt === "/"){
        ans =num1 / num2
    }
    return ans;
}
var result = calc(4, 7, "+");
var result1 = calc(19, 32, "*");
var result2 = calc(18, 6, "-");
var result3 = calc(1, 4, "/");

console.log(result);

console.log(result1);

console.log(result2);

console.log(result3);

//question 5
function xyz (){
    var num = Math.pow(2, 2);
    console.log(num);
}
xyz();

//question 6
function xyz (){
    var num;
    if (num < 0)
    return -1;
    
    else if(num == 1)
    return 1;
  
    console.log(num);
  }
  
  xyz();

//question 7
function xyz (){
    var num1 = +prompt("Enter Number (Start Couting)");
    var num2 = +prompt("Enter Number (End Couting)");
  
    for(i = num1; i <= num2 ; i++){
      console.log(i)
    }
  }
  xyz();

//question 8


//question 9
function areaOfRec (lenght, width){
    return lenght * width;
  }
  console.log("the area of rectangle is " +areaOfRec(4, 10)+ " cm");

//question 10
function checkPalindrome(string) {
    var arrValue = string.split("");
    var reverseArr = arrValue.reverse();
    var revString = reverseArr.join("");
  
    if (string === revString){
      console.log('It is a palindrome');
    }
    else{
      console.log('It is not a palindrome');
    }
  }
  var string = prompt("Enter Word");
  checkPalindrome(string);
//question 11
var msg = "the quick brwon fox";
console.log(msg);
function xyz() {
 var arr = msg.split(" ");

 for( var i = 0; i < arr.length; i++){
  arr[i]= arr[i][0].toUpperCase() + arr[i].slice(1);
 }

 var str = arr.join(" ")
 console.log(str)

}
xyz();

//question 12
var line = "Web Development Tutorial"
console.log(line);

function xyz (){
 var arr = line.split(" ");
 var longword = 0;

 for(var i = 0; i < arr.length; i++){
    if(arr[i].length > longword){
    longword = arr[i].length;
  }
 }

 console.log(longword);

}
xyz();
   

//question 13


//question 14