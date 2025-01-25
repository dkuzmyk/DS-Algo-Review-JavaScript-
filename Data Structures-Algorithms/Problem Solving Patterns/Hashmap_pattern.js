/*
Given some 2 arrays arr1, arr2, return true if there is a squared number in arr2
 for each number stored in arr1, such that arr1[i]^2 == arr2[j]

Example 1:
Input: arr1 = [1,2,3], arr2 = [1,4,9]
Output: 
Explanation: arr1[0]^2 = 1, arr1[1]^2 = 4, arr1[2]^2 = 9
arr2[0] = 1, arr2[1] = 4, arr2[2] = 9
Hence, return true

Example 2:
Input: arr1 = [1,2], arr2 = [1,2,4]
Output: true
Explanation: arr1[0]^2 = 1, arr1[1]^2 = 4

Example 3:
Input: arr1 = [1,2], arr2 = [1,3,4]
Output: false

Example 4:
Input: arr1 = [1,2,3], arr2 = [1,9]
Output: false

*/

function ret(arr1, arr2){
    let hash = {};
    arr2.forEach(element => {   // O(n)
        // if element exists, add check value and add 1
        if(hash[element]){
            hash[element] += 1;
        } else {
            hash[element] = 1;
        }
    });

    // for each element in arr1, check if squared number exists in hash, if it does remove 1 from value else return false
    for(let i = 0; i < arr1.length; i++){   // O(n)
        let num = arr1[i];
        if(!hash[num ** 2]){
            return false;
        } else {
            hash[num ** 2] -= 1;
        }
    }
    return true
}

console.log(ret([1,2,3], [1,4,9])); // true
console.log(ret([1,2], [1,2,4])); // true
console.log(ret([1,2], [1,3,4])); // true
console.log(ret([1,2,3], [1,4,9,16])); // true
console.log(ret([1,2,3], [1,9])); // false
console.log(ret([1,2,3], [1,2,3])); // false
console.log(ret([1,2,3], [1,2,3,4])); // false
console.log(ret([1,2,3], [1,4,10])); // false