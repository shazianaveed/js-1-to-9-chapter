//Alert chapter
// 1. What does the alert function do in JavaScript?

//Alert hamay browser pr popup message alert kr k dyta hai
// Alert ka syntax hai
// alert();
// alert ko lower case ma hi likhty hain

// 2. Write the code to display an alert with the message "Welcome to my website!".
// alert("Welcome to my website!.");

// 3. What happens if you capitalize the alert keyword?
// Agr capital letter ma likhygy ya first letter capital to error ayega.

// 4 . Write the correct JavaScript syntax to display "Hello, world!" in an alert box.
// alert("Hello, world!")

// 5 . Write a JavaScript alert statement with proper formatting and explain each part of the
// code.
// alert ka pura syntax yeh hai
// alert( ) :
// alert keyword hai
// ( ) isky andar jo hamnay show krwana hota ha osay likhty hai strings ma ya numbers ma
// and last semicolon ;
// Is k baghair bhi code run hojata ha lekin isay lgana zrori ha

// chapter variable for string.
// 1 . Write code that declares a variable message, assigns the value "Hello, world!" to
// it, and then displays an alert with that message.
// var  message = "Hello, world!"
// alert(message);

// 2 . Declare a variable named age, leave it undefined, then assign the value 25 to it in a
// later statement. Display an alert showing the value of age.
// var age = 25;
// alert(age);

//3 . Declare a variable named greeting, assign it the value "Good morning!", and then
// display it in an alert. Afterwards, change the value of greeting to "Good evening!"
// and display the new value in another alert.
// Declare a variable named 'greeting' and assign it the value "Good morning!"
// var greeting = "Good morning!";

// // Display the initial value of greeting in an alert
// alert(greeting);

// // Change the value of greeting to "Good evening!"
//  var greeting = "Good evening!";

// // Display the new value of greeting in another alert
// alert(greeting);

// 4 . Create a variable called favoriteColor  and assign it the value "blue". Then display
// an alert that says "My favorite color is blue" using the variable.
// var favoriteColor = " Blue";
// alert("My favorite color is" +  favoriteColor);

// 5 . Declare a variable named age, leave it undefined, then assign the value 25 to it in a
// later statement. Display an alert showing the value of age.

// var age = 25;
// alert(age);

// chapter 3 Varible for number

// 1. Declare a variable height and assign the value 170 to it. Then, add 10 to height and
// store the result in a new variable newHeight. Display an alert with the new value.

// var height = 170;
// var newHeight = height + 10 ;
// alert(newHeight);

// 2. Declare two variables, num1 and num2, and assign them values of 50 and 30, respectively.
// Create a new variable sum that stores the sum of num1 and num2, and display the sum in an
// alert.

// var num1 = 50;
// var num2 = 30;
// var sum = num1 + num2;
// alert(sum);

// 3. Declare a variable numToBeAdded with the value 20. Then use the following code:Display
// total in an alert. What is the value of total?

// let numToBeAdded = 20;
// let total = 0;

// total += numToBeAdded;

// alert(total);

// 4. Declare a variable price with the value 120. Now add tax (10%) to price and display the total
// price in an alert.

// let price = 120;
// let taxRate = 0.1;
// let totalPrice = price + price * taxRate;
// alert(totalPrice);


//4.Variables for Numbers

// 1. Write code to create a variable myAddress and assign it your city name. Ensure your variable
// name follows camelCase naming convention, and then display the value in an alert.

// let myAddress = "Karachi"; 
// alert(myAddress); 

// 2. Write code to declare three variables using camelCase: userName, userEmail, and
// userPassword. Assign them appropriate string values and display them together in an alert.

// let userName = "Shazia"; 
// let userEmail = "sohanaveed698@gmail.com"; 
// let userPassword = "12345"; 
// let userInfo =( `Username: ${userName}\nEmail: ${userEmail}\nPassword: ${userPassword}`);
// alert(userInfo);

// 3. Declare a variable userAddress that contains spaces (i.e., try naming it like user address)
// and observe what happens. Then correct the name using camelCase and display the value in
// an alert.

// let userAddress = "123 shazia karachi"; 
// alert(userAddress);

// 4. Create a variable rose and assign it a value "Floribundas". Then, try accessing the variable
// using Rose (uppercase) and see what happens. Display both results.

// let rose = "Floribundas";
// let result = typeof Rose !== 'undefined' ? Rose : "Rose are beatifull"; 
// alert("rose: " + rose + "\n" + "Rose: " + result);

// chapter no. 5.Math expressions: Familiar operators

// 1. Write a JavaScript statement that adds two numbers, 25 and 30, and assigns the result
// to a variable called sum. Then display the value in an alert.

// let sum = 25 + 30; 
// alert(sum); 

// 2. Create a variable num1 and assign it the value 25. Create another variable num2 and assign it
// the value 5. Add both variables and store the result in a new variable called sum. Display the
// result in an alert.

// let num1 = 25; 
// let num2 = 5;  
// let sum = num1 + num2; 
// alert(sum); 


// 3. Write a statement that assigns the remainder of 27 divided by 4 to a variable called
// modulusResult. Then display the value in an alert.

// let modulusResult = 27 / 4; 
// alert(modulusResult); 

// chapter 6.Math expressions: Unfamiliar operators

// 1. Initialize a variable num with the value 3. Use the post-increment (num++) operator and
// assign the result to a new variable newNum. Display both num and newNum in alerts.

// let num = 3; // Initialize num with the value 3
// let newNum = num++; // Use post-increment and assign to newNum

// alert("num: " + num); // Display the updated value of num
// alert("newNum: " + newNum); // Display the value of newNum


// 2. Write a program that initializes a variable counter with the value 10. Use counter++
// twice in your code, then display the final value of counter in an alert.

// let counter = 10; // Initialize counter with the value 10

// counter++; // First increment
// counter++; // Second increment

// alert("Final value of counter: " + counter); // Display the final value in an alert

// 3. Initialize a variable points with the value 20. Use the post-decrement operator
// (points--) and the pre-increment operator (++points) in separate statements.
// Display the final value of points in an alert.

// let points = 20; // Initialize points with the value 20

// points--; // Post-decrement: points is now 19
// ++points; // Pre-increment: points is now 20 again

// alert("Final value of points: " + points); // Display the final value in an alert

// 4. Write a program that initializes a variable number with the value 0, uses ++number
// three times in your code, and then displays the final value of number in an alert.

// let number = 0; // Initialize number with the value 0

// ++number; // First increment: number is now 1
// ++number; // Second increment: number is now 2
// ++number; // Third increment: number is now 3

// alert("Final value of number: " + number); // Display the final value in an alert

// chapter7.Math expressions: Eliminating ambiguity

 // 1. Combine parentheses and the modulus operator % to first calculate the remainder of 20 % 6
// before performing the other arithmetic operations. What is the value of calculation?

// let calculation = (20 % 6) + 10; 
// alert(calculation);

// 2. Write an expression that calculates (6 + 2) * (5 - 3), and determine the value of
// expressionValue.

// let expressionValue = (6 + 2) * (5 - 3); 
// alert(expressionValue);

// 3. What is the value of finalTotal in the following expression, and how does operator
// precedence apply here?

// let finalTotal = 5 + 3 * 2 - 8 / 4;
// alert(finalTotal);

// chapter 8.Prompts

// 1. Write a script that asks the user, "What is your name?" and stores the answer in a
// variable userName. Then, display an alert that says "Hello, [userName]!".

// let userName = prompt("What is your name?"); 
// alert("Hello, " + userName + "!"); 

// // 2. Create a prompt that asks the user, "How old are you?" and assigns the response to a variable
// age. Display an alert that says "You are [age] years old." Handle the case where the user clicks
// "Cancel" by displaying "No age provided" in the alert.

// let age = prompt("How old are you?");

// if (age === 10) { 
//     alert("No age provided"); 
// } else {
//     alert("You are " + age + " years old."); 
// }

// 3. Write a prompt asking, "How many pets do you have?" and assign the response to a variable
// pets. If the user enters nothing and clicks "OK", display an alert saying "You didn't enter
// anything."

// let pets = prompt("How many pets do you have?"); 

// if (pets === "") { 
//     alert("You didn't enter anything.");
// } else {
//     alert("You have " + pets + " pets."); 
// }

// // 4. Write a script that asks the user "Enter a number between 1 and 10". Convert the user input to a
// number, then multiply it by 2 and display the result in an alert.


// let userInput = prompt("Enter a number between 1 and 10"); 
// let number = Number(userInput); 

// if (number >= 1 && number <= 10) { 
//     let result = number * 2;
//     alert("The result is: " + result); 
// } else {
//     alert("Please enter a valid number between 1 and 10."); 
// }

// 5. Write a prompt that asks the user, "What is your favorite number?" and assigns the response to
// a variable favNum. If the user does not provide a response and clicks "OK", assign a default
// value of 7 to favNum and display it in an alert.


// let favNum = prompt("What is your favorite number?"); 

// if (favNum === "") { 
//     favNum = 7; 
// }

// alert("Your favorite number is: " + favNum); 

// chapter 9.if statements

// // 1. Prompt and If Statement: Write a script that asks the user "What is the capital of France?" If
// the user answers "Paris", display an alert with "Correct!" Otherwise, display an alert with "Try
// again!"

// let userAnswer = prompt("What is the capital of France?"); 

// if (userAnswer === "Paris") { 
//     alert("Correct!"); 
// } else {
//     alert("Try again!"); 
// }

// 2. If-Else Statement: Modify the previous script to use an else statement. If the user's answer is
// correct, display "Correct!", otherwise display "Incorrect, the correct answer is Paris."


// let userAnswer = prompt("What is the capital of France?"); 

// if (userAnswer === "Paris") { 
//     alert("Correct!"); 
// } else {
//     alert("Incorrect, the correct answer is Paris."); 
// }

// 3. Multiple Correct Answers: Write a program that asks the user, "What is the capital of the
// United Kingdom?" If they answer "London" or "The United Kingdom", display "Correct!". Use an
// if-else condition to check both possible answers.

// let userAnswer = prompt("What is the capital of the United Kingdom?"); 

// if (userAnswer === "London" || userAnswer === "The United Kingdom") { 
//     alert("Correct!"); 
// } else {
//     alert("Incorrect, the correct answer is London."); 
// }

// 4. Incrementing a Score: Modify a script to keep track of a score. Start with a score of 0. Every
// time the user answers a question correctly, increment the score by 1 and display the updated
// score.


// let score = 0; 
// let userAnswer = prompt("What is the capital of the United Kingdom?"); 

// if (userAnswer === "London" || userAnswer === "The United Kingdom") { 
//     score++;
//     alert("Correct! Your score is now: " + score); 
// } else {
//     alert("Incorrect, the correct answer is London.");
// }


//5. Testing Multiple Variables: Write a script that asks the user two questions: "What is the capital
// of Germany?" and "What is 10 + 10?" If both answers are correct ("Berlin" and 20), display "You
// got both right!". If only one answer is correct, display "You got one correct!".


// let capitalAnswer = prompt("What is the capital of Germany?"); 
// let mathAnswer = prompt("What is 10 + 10?"); 

// let correctCapital = "Berlin"; 
// let correctMath = "20"; 
// if (capitalAnswer === correctCapital && mathAnswer === correctMath) {
//     alert("You got both right!"); 
// } 
// else if (capitalAnswer === correctCapital || mathAnswer === correctMath) {
//     alert("You got one correct!");
// } 
// else {
//     alert("Both answers are incorrect."); 
//}


