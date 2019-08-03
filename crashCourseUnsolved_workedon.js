// CRASH COURSE JS
// ==========================================================

// 1. BASIC VARIABLES
// ==========================================================

// Create a basic variable

var variable


// 2. ARRAYS
// ==========================================================

// Create an array of five strings

var variable = ['string-1', 'string-2', 'string-3', 'string-4','string-5']


// Create an array of five numbers


var numbers = [0,1,2,3,4]


// 3. FOR LOOPS
// ==========================================================

// Create a for loop that loops through and prints "My name is Bob five times"

for (var i = 0; i < numbers.length; i++) {
    console.log("My name is Bob five times")
}

// Create a for loop that loops through your five string array

for (var i = 0; i < variable.length; i++) {
    console.log(variable[i])
}



// 4. FUNCTIONS
// ==========================================================

// Create a function that takes two numbers and divides the first number by the second.
// Then call that function

function divive (num1,num2) {
   var results = num1 / num2

    return results
}

divide(2,3)
// Create a function that takes in an array of numbers and then loops through the array and prints out numbers.
// Then call that function

function practice () {
    for (var i = 0; i < numbers.length; i++) {
        console.log (numbers[i])
    }
}

practice ()


// 5. OBJECTS
// ==========================================================

// Create a JavaScript Object

var car = {
   color : "red",
   make : "big",
   model : "weird",
}


// Console log any three of the properties in that object

console.log (object.key1, object.key2, object.key3)
// Create an Array of 5 Objects

var cars = [{
    color : "grey",
    make : "honda",
    model : "ridgeline",
    },
    {
        color : "silver",
        make : "honda",
        model : "accord",
    },
    {
        color : "green",
        make : "toyota",
        model : "prius",
    },
    {
        color : "blue",
        make : "santa-cruz",
        model : "bronson",
    },
    {
        color : "black",
        make : "vans",
        model : "low-top",
    }]

// Console log 3 properties for every one of the five objects

for (var i = 0; i < cars.length; i++) {
    var color = cars[i].color
    var make = cars[i].make
    var model = cars[i].model

    console.log (color, make, model)
}



// 6. JQUERY EVENTS
// ==========================================================

// Create a basic html button then create an onClick event that triggers an on click event.

$("id-tag").on('click' (function () {
    $('display').text ('you just clicked')
}));

// 7. OVERALL STRUCTURE
// ==========================================================


// Talk to student a little about the approach for "getting started" on an application.
// Talk about the concept of variables, functions, calls.
