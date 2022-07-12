//chp 31-34
//question1
var currentDate = new Date();
console.log(currentDate);

//question2
var month = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
var date = new Date();
var nameOfMonth = date.getMonth();
var result = month[nameOfMonth];
console.log(result);

//question3
var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
var date = new Date();
var nameOfDays = date.getDay();
var result = days[nameOfDays];
console.log(result);

//question4
var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
var date = new Date();
var nameOfDays = date.getDay();
var result = days[nameOfDays];

if (result === "Sun"){
    alert("its fun day")
}
else if (result === "Sat"){
    alert("its fun day")
}

else{
    console.log(result)
}

//question5
var date = new Date().getDate();

if (date => 15){
    alert("First fifteen days of the month")
}

else if (date <= 16){
    alert("Last fifteen days of the month")
}

//question6
var currentDate = new Date();
document.write("Current Date: " + currentDate);

var miliSecs = new Date().getTime();
document.write(" <br> Elapsed Miliseconds since January 1 1970 : " + miliSecs)

var date = new Date();
var miliSecs = date.getTime();
var mins = date.getMinutes();
var diff = miliSecs - mins;
var diffmin = diff/(1000*60*60);
var result = Math.floor(diffmin);

document.write(" <br> Elapsed Minutes since January 1 1970 : " + result);

//question7
var date = new Date();
var hours = date.getHours();

if (hours => 11){
alert("it's AM")
}
else if (hours <= 12){
    alert("it's PM")
    }
 
//question8
var date = new Date("31 Dec, 2022");
console.log (date);

//question9

//question10
var date = new Date("05 Dec, 2015");
var secs = date.getSeconds();
var diff = date - secs;
var diffsec = diff/(1000*60);
var result = Math.floor(diffsec);
document.write("On Referrence Date " + date + " " + result + " seconds has passed since 2015")
//question11

//question12
var currentDate = new Date();
var oldDate = new Date("12 july, 1922")

console.log("Current Date: " + currentDate + " 100 Years back, it was: " + oldDate);
//question13
var user = +prompt("Enter your Age");
var date = new Date().getFullYear();
var result = date - user;

console.log("Your Birth year is: " + result);
//question14
var customerName = "Javeed";

var month = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"]
var date = new Date();
var nameOfMonth = date.getMonth();
var result = month[nameOfMonth];

var numOfUnits = 410 ;
var unitCharge = 16 ;
var payAmount = numOfUnits * unitCharge;
var dueDate = new Date("july 19,2022").toLocaleDateString();
var latePayCharge = 350 ;
var payAfterDate = payAmount + latePayCharge;
var afterDate = new Date("july 20,2022").toLocaleDateString();

document.write("Customer Name: " + customerName + "<br>Month: " + result + "<br>Number of Units: " + numOfUnits + 
"<br>Unit Charges: " + unitCharge + "<br><br>Net Amount Payable with due date: " + dueDate + " :Rs "+ payAmount 
+ "<br>Late Payment Charges: " + latePayCharge + "<br>Gross Amount Payable after due date: " + afterDate + " :Rs " + payAfterDate);