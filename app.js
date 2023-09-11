// Math Methods

// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var number=parseFloat(prompt("Enter any number"));
// round=Math.round(number);
// ceil=Math.ceil(number);
// floor=Math.floor(number);
// console.log("Round off value: ",round);
// console.log("Ceil value: ",ceil);
// console.log("floor value: ",floor);


// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var number=parseFloat(prompt("Enter any negative number"));
// round=Math.round(number);
// ceil=Math.ceil(number);
// floor=Math.floor(number);
// console.log("Round off value: ",round);
// console.log("Ceil value: ",ceil);
// console.log("floor value: ",floor);


// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var absoluteValue= parseFloat(prompt("Enter any negative number "))
// absoluteValue= Math.abs(absoluteValue)
// console.log("Absolute value",absoluteValue)


// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// var diceNumber=""
//     console.log("Dice Number",Math.floor(Math.random(diceNumber)* 6 + 1))

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var coinToss=""
// coinToss=Math.floor(Math.random(coinToss)* 2 +1) ;
// if (coinToss==1) {
//     console.log(coinToss)
//     console.log("Randon coin value:","Tails")
// } else {
//     console.log(coinToss)
//     console.log("Randon coin value:", "Heads")
    
// }

// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// var randomNumber=Math.floor( Math.random(randomNumber) *100 +1);
// console.log(randomNumber)


// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// var randomNumber=Math.floor( Math.random(randomNumber) * 10 + 1);
// var userInput=parseInt(prompt("Enter a number from 1  to 10 "))
// if (randomNumber==userInput) {
//     console.log("Congratulation your number equal the secret number")
// } else {
//     console.log("Sorry your number is not equal the secret number")    
// }
// console.log("Secret Number",randomNumber)
// console.log("Your Number",userInput)


// Date Methods
// 1. Write a program that displays current date and time in
// your browser.
// var date=new Date();
// console.log(date)

// 2. Write a program that alerts the current month in words.
// For example December.
// var currentMonth = new Date().getMonth();
// var monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
// var currentMonthName = monthNames[currentMonth];
// alert("Current Month:"+ " "+ currentMonthName);


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var currentDayName = dayNames[currentDay];
// alert("Current Day:"+ " "+ currentDayName);

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var currentDate = new Date();
// var currentDay = currentDate.getDay();
// if (currentDay === 6 || currentDay === 0) {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var currentDate = new Date();
// var currentDay = currentDate.getDate();
// if (currentDay < 16) {
//   alert("First fifteen days of the month");
// } else {
//   alert("Last days of the month");
// }


// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// Create a new Date object representing the current date and time
// var currentDate = new Date();
// var millisecondsSinceEpoch = currentDate.getTime();
// var minutesSinceMidnight = Math.floor(millisecondsSinceEpoch / 60000);
// console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceMidnight);



// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// Create a new Date object
// var currentDate = new Date();
// var currentHour = currentDate.getHours();
// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }



// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var laterDate = new Date(2020, 11, 31);
// console.log(laterDate);


// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// Create a Date object for June 18, 2015
// var ramadanStartDate = new Date(2015, 5, 18); // Month is 0-based, so 5 represents June
// var currentDate = new Date();
// var timeDifference = currentDate - ramadanStartDate;
// var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan: " + daysPassed);


// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// Define the reference date (e.g., October 1, 2021)
// var referenceDate = new Date("2021-10-01");
// var beginningOf2015 = new Date("2015-01-01");
// var timeDifference = referenceDate - beginningOf2015;
// var secondsElapsed = Math.floor(timeDifference / 1000);
// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed + " seconds");

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// Create a Date object for the current date and time
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours + 1);
// document.write("Original Date: " + currentDate);



// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

// Create a Date object for the current date and time
// var currentDate = new Date();
// currentDate.setFullYear(currentDate.getFullYear() - 100);
// alert("Date 100 years ago: " + currentDate);

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.
// Ask the user for their age
// var age = prompt("Please enter your age:");

// // Calculate the birth year
// var currentYear = new Date().getFullYear();
// var birthYear = currentYear - parseInt(age);

// // Display the birth year in the console
// console.log("Your birth year is:", birthYear);

