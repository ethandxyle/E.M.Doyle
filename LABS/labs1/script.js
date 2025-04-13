SgrW// /*1. Dynamic Age Calculator
// Use a traditional function to calculate the user’s age.
//     Prompt the user to enter their birth year using prompt() and store it in a variable.
//     Based on their input, determine how many years old they are.
//     Log the calculated age to the console: “Your age is:”
//  */
function calculateAge() {
    let birthYear = prompt("Enter your birth year:");

    // Convert the input (string) to a number
    let birthYearNum = parseInt(birthYear);

    // Check if the input is a valid number
    if (isNaN(birthYearNum)) {
        console.log("Please enter a valid year.");
    } else {
        let currentYear = 2025;
        let age = currentYear - birthYearNum;
        console.log("Your age is: " + age);
    }
}
calculateAge();

// /*2. Simple Interest Calculator
// Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
//     Simple Interest = (Principal × Rate × Time)/100
// Prompt the user for the principal amount, rate of interest, and time in years using prompt().
//     Store each of these in a separate variable
// Log the result to the console: “Your simple interest is:” */

function calculateSimpleInterest(){
    let principle= prompt("Enter the principle amount:")
    let rate=prompt("Enter the rate of interest:")
    let time= prompt("Enter the time in years:")
    let simpleInterest= (principle* rate* time)/100
    console.log(simpleInterest)
}
calculateSimpleInterest();

// /*
// 3. Favorite Color Selector
// Create an array with three colors.
//     Use a traditional function named addColor to add a new color to an array.
//     Takes one argument - the array of colors
// Prompt the user to input a color name to add to the array.
//     Prepend the users color to the existing array
// Log the updated array to the console using: “Updated colors: “*/

function addColor(colorsArray) {
    let newColor = prompt("Enter your favorite color to add:");

    colorsArray.unshift(newColor);

    console.log("Updated colors: " + colorsArray);
}
let colors = ["Red", "Blue", "Green"];

addColor(colors);
//
// /*4. Event Countdown with Date Object
// Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
// Takes one argument - users event date
// Prompt the user to input the event date in the format YYYY-MM-DD.
// If not in this format - make the user enter in correct format
// Use the Date object to calculate the difference in days between today and the event.
// Log the result to the console using: “Days until the event: “. */
//
Function to calculate days until the event
function calculateDaysUntil() {
    let currentDate = new Date();

   let eventDate = prompt("Enter your event date (in format YYYY-MM-DD):");
    if (eventDate.indexOf("-", eventDate.indexOf("-") + 1) >= 0) console.log("success");

    let futureEvent = new Date(eventDate);

    let timeDifference = futureEvent - currentDate;

    let daysUntilEvent = Math.ceil(timeDifference / (1000 * 3600 * 24));

    console.log("Days until the event: " + daysUntilEvent);
}

calculateDaysUntil();
// /*5. Temperature Classifier
// Use a traditional function named classifyTemperature to classify a temperature.
// Takes one argument - user input for temperature
// Prompt the user to input the temperature in Celsius.
// Convert into Farenheit using this formula
// Fahrenheit = (C x (9/5)) + 32
// Use conditionals to classify the temperature as:
//  "Hot," if over 100
// "Warm," if over 80
// "Cold” if under 40
// “Chilly” for everything else
// Error message if number not entered
// Log the classification to the console using: “The temperature is: “
//  */
// Traditional function to classify the temperature
function classifyTemperature(celsius) {
    if (isNaN(celsius)) {
        console.log("Error: Please enter a valid number.");
        return;
    }
    let fahrenheit = (celsius * (9 / 5)) + 32;

    let classification;
    if (fahrenheit > 100) {
        classification = "Hot";
    } else if (fahrenheit > 80) {
        classification = "Warm";
    } else if (fahrenheit < 40) {
        classification = "Cold";
    } else {
        classification = "Chilly";
    }

    console.log("The temperature is: " + classification);
}

let userInput = prompt("Enter the temperature in Celsius:");

classifyTemperature(Number(userInput));
//
// /*6. Student Array Operations
// Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
// Use a fat arrow function to modify a student's age in an array of student objects.
// Prompt the user to input the name of the student to modify
// If student does not exist, log an error message
// Prompt the user to input a new age.
// If not a number, log an error message
// Update the student’s age in the array of objects.
// Log the updated array to the console: “Updated students: ”
//  */
// // Define the Student class
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    updateAge(newAge) {
        if (isNaN(newAge) || newAge <= 0) {
            console.log("Error: Please enter a valid number for the age.");
            return;
        }
        this.age = newAge;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

let students = [
    new Student("Alice", 20),
    new Student("Bob", 22),
    new Student("Charlie", 18)
];

function modifyStudentAge(name, newAge) {
    let student = students.find(student => student.name.toLowerCase() === name.toLowerCase());

    if (!student) {
        console.log("Error: Student not found.");
        return;
    }

    student.updateAge(newAge);

    console.log("Updated students:");
    students.forEach(student => student.display());
}

let studentName = prompt("Enter the name of the student to modify:");
let newAge = prompt("Enter the new age of the student:");

modifyStudentAge(studentName, Number(newAge));

// /*7. Grade Classification
// Use a fat arrow function named classifyGrade to classify grades.
// Prompt the user to input a grade as a number.
// Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
// ONLY use ternaries!!!!
// Log the result to the console using: “The grade classification is: “
//  */
//
 const classifyGrade= (grade)=> {
     let classification =
         grade >= 90 ? "A":
             grade >= 80 ? "B":
                 grade >= 70 ?"C":
                     grade >= 60 ? "D":
                         "F";
 console.log("The classification is:"+ classification)
 };
 let userGrade = prompt("Enter your grade:");

 classifyGrade(Number(userGrade));

// /*8. Shopping List Operations
// Hardcode an array representing a shopping list of eggs, butter, and flour.
// Use a fat arrow function named modifyItem to modify items in an array.
// Takes two arguments - the shopping list array and the prompted new item form user.
// Log the updated array to the console using: “Updated shopping list: “.
//  */
//
let shoppingList = ['eggs', 'butter', 'flour'];

const modifyItem = (shoppingList, newItem) => {
    shoppingList.push(newItem);
};

let newItem = prompt("Enter a new item to add to the shopping list:");

modifyItem(shoppingList, newItem);

console.log("Updated shopping list: ", shoppingList);

// /*9. Weekday Detector
// Use a fat arrow function to determine the day of the week.
// Use the Date object to get the current day.
// Log the day of the week to the console using: “Today is: “
//  */
//
const getDayOfWeek = () => {
    const today = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = today.getDay();

    return daysOfWeek[dayIndex];
};
console.log("Today is: " + getDayOfWeek());
//
// /*10. How Long Until Graduation
// Use a fat arrow function to determine today’s date.
// Use the Date object to get the current day.
// Log the day of the week to the console using: “Today is: “
// Display in this format: “2025, January 21st”
// NOTE: use -st, -nd, -rd, -th based on the numerical date
// 22nd, 5th, 9th, 23rd, etc….
// Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
// Last day is 5/17/25
// Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.
//  */
//
const getFormattedDate = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString('default', { month: 'long' });
    const year = today.getFullYear();

    let suffix = 'th';
    if (day === 1 || day === 21 || day === 31) suffix = 'st';
    else if (day === 2 || day === 22) suffix = 'nd';
    else if (day === 3 || day === 23) suffix = 'rd';

    return `${year}, ${month} ${day}${suffix}`;
};

const daysUntilGraduation = () => {
    const today = new Date();
    const graduationDate = new Date('2025-05-17');

    const timeDifference = graduationDate - today;

    const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

    return daysLeft;
};

console.log("Today is: " + getFormattedDate());

console.log(`And you have ${daysUntilGraduation()} left in this web design program until graduation.`);



