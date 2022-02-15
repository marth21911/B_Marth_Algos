function isPalli(str){
    for(i=0; i<str.length/2; i++){
        var right= str.length-1-i
        if (str [i] != str[right]){
            return false
        }
    }
    return true
}
console.log(isPalli("tacocat"))

function longestPalendrome(str){

    str = str.toUpperCase()

    var storePals = [""]
    var storePalsIterator = 0

    // Store all pals that we find into storePals[]
    // i iterates through first letters
    for (var i = 0; i < str.length; i++){
        // j iterates from first letter at i through end of string
        for (var j = i; j < str.length; j++){
            // console.log(str.substring(i, j))
            if (isPal(str.substring(i,j))){
                storePals[storePalsIterator] = str.substring(i,j)
                storePalsIterator++
            }
        }
    }

    console.log(storePals)

    // find the largest one, store that index as storePalsIterator
    storePalsIterator = 0
    for (var k = 0; k < storePals.length; k++){
        if (storePals[storePalsIterator].length < storePals[k].length){
            storePalsIterator = k
        }
    }

    // return longest pal in storePals
    return storePals[storePalsIterator]
}

var word = "ABCaDEDfdEFGHIaIHJ"
console.log("Original: " + word)
console.log(" Longest: " + longestPalendrome(word))

console.log(longestPalendrome("there are palindromes racecar in tacocat here abcdefedcba"))
