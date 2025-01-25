/*
Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word or phrase phrase, or name formed by rearranging the letters of another name or phrase, 
typically using all the original letters exactly once. EG: 'cinema' and 'iceman'

validAnagram('cinema', 'iceman') => true
validAnagram('', '') => true
validAnagram('aaz', 'zza') => false
validAnagram('anagram', 'nagaram') => true
validAnagram('rat', 'car') => false
validAnagram('awesome', 'awesom') => false
validAnagram('qwerty', 'qeywrt') => true
validAnagram('texttwisttime', 'timetwisttext') => true

*/

function validAnagram(str1, str2) {
    // possible solution:
    // put all the characters in str1 into an object and check if they are equal when iterating through the str2
    // if they are equal return true else return false
    // time complexity: O(n)
    if(str1.length != str2.length)
        return false;

    let dict = {};
    for(let val of str1){   // O(n)
        if(dict[val] != undefined)
            dict[val] += 1;
        else
            dict[val] = 1;
    }

    for(let char of str2){
        if(dict[char]!=undefined && dict[char]>0)
            dict[char] -= 1;
        else
            return false;
    }
    return true;  
}

console.log(validAnagram('cinema', 'iceman')==true) // true
console.log(validAnagram('', '')==true) // true
console.log(validAnagram('aaz', 'zza')==false) // false
console.log(validAnagram('anagram', 'nagaram')==true) // true
console.log(validAnagram('rat', 'car')==false) // false
console.log(validAnagram('awesome', 'awesom')==false) // false
console.log(validAnagram('qwerty', 'qeywrt')==true) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')==true) // true
console.log(validAnagram('sdfghjkl', 'lkjhgfds')==true) // true
console.log(validAnagram('poiu', 'iupo')==true) // true
