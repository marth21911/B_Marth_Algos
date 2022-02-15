REVERSE STRING
// Implement reverseString(str) that takes in a String, and then returns a string of the same length, but with the characters reversed.

// Example: "creature" ---> "erutaerc"

// ** Don't use the built-in reverse() method!

function reverseString(str) {
    var newString="";
    for (let i=str.length-1; i>0, i--){
        newString += str [i]
    }
    return newString i
    }
var creature= "Polyphia is Great"
console.log(reverseString("str")); // "erutaerc"


ACRONYM


// Create a function that, given a string, returns the string's acronym (first letter's only, capitalized).

// Example: "there's no free lunch - gotta pay yer way" --> "TNFL-GPYW""

function acronym(str) {
    var acr=""
    var split given.split("")
    for (var i=0; i<split.length; i++){
        acr += split[i][0]
    }
    return acr;
}

console.log(reverseString(creature));
console.log("acronym:" acronym(creature))