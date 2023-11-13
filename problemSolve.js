// Write a method or function that accepts a string. The method or function should return a boolean that describes whether or not the string has an even number of characters.

function hasEvenCharacters (stringInput){
    return stringInput.length % 2 === 0
}
console.log(hasEvenCharacters('hello'))
console.log(hasEvenCharacters('hi'))
console.log(hasEvenCharacters(''))


//Challenge 2
//Update your previous method or function so it accepts an array. The method or function should return a boolean that describes whether or not the array's length is an even number.

function hasEvenCharacters (arrayInput){
    return arrayInput.length % 2 === 0
}
console.log(hasEvenCharacters(['hello', 'hi']))
console.log(hasEvenCharacters(['hi']))
console.log(hasEvenCharacters([]))

//Challenge 3

/*Write a method or function that accepts a number from 1-24 that represents the current time rounted to the closest hour in 24-hour military time. (i.e. 11 = 11:00 AM, 16 = 4:00 PM). The function should return a different greeting based on the time of day.

4 AM - 11 AM: Good morning!
12 PM - 4 PM: Good afternoon!
5 PM - 8PM: Good evening!
9 PM - 3 AM: Good night!*/

function greeting (time){
    if (time >= 4 && time <= 11){
        return 'Good morning!'
    } else if (time >= 12 && time <= 16){
        return 'Good afternoon!'
    } else if (time >= 17 && time <= 20){
        return 'Good evening!'
    } else if (time >= 21 && time <= 24){
        return 'Good night!'
    }
}
console.log(greeting(4))
console.log(greeting(11))
console.log(greeting(16))
console.log(greeting(17))
console.log(greeting(20))
console.log(greeting(21))
console.log(greeting(24))