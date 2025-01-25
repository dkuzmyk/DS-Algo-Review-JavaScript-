/**
 Multiple Pointers - isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a 
subsequence of the characters in the second string. In other words, the function should check whether the characters in the first 
string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
 */

function isSubsequence(arr1=[], arr2=[]){

    let count = 0;
    for(let i = 0; i < arr2.length; i++) {
        if(arr1[count]==arr2[i]){
            count++;
        }
    }

    count == arr1.length? ret = true : ret = false;
    return ret;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
