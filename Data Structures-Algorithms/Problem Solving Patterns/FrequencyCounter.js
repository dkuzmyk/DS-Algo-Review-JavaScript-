/**
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
 */

function sameFrequency(num1, num2){
    // cast the integers to two string 
    // for each char in string of num1, push to a hashmap and count how many values for each key
    // iterate thro string of num2 and check if hashmap contains, if yes subtract 1 else return false

    let num1String = num1+"";
    let num2String = num2+"";

    let dict = {}
    for (let index = 0; index < num1String.length; index++) {
        dict[num1String[index]]? dict[num1String[index]]+=1 : dict[num1String[index]] = 1;        
    }

    for(let e of num2String) {
        if(dict[e] > 0)  
            dict[e] -=1 
        else
            return false;
    }
    return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
