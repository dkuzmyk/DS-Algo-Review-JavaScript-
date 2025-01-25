/*
Given an array of integers nums, find all unique triplets (a, b, c) in the array such that: a+b+c=0

Constraints:
The solution set must not contain duplicate triplets.
The function should return a list of all such triplets.

Input
An integer array nums of size n where 3 ≤ n ≤ 10^4 and elements range from -10^3 to 10^3

Output
A list of lists, where each inner list represents a triplet of integers summing to zero.


Input:
nums = [0, 1, 1]
Output:
[]

Input:
nums = [0, 0, 0, 0]
Output:
[[0, 0, 0]]

Input:
nums = [-2, 0, 1, 1, 2]
Output:
[[-2, 0, 2], [-2, 1, 1]]

*/

function threeSum(arr=[]){
    if (arr.length === 0) return [];

    arr.sort((a, b) => a - b);
    let list = []

    for (let index = 0; index < arr.length; index++) { 
        if(index > 0 && arr[index] === arr[index-1])
            continue;
        
        let headIndex = index+1; 
        let tailIndex = arr.length-1;

        let head = arr[headIndex]
        let tail = arr[tailIndex]
        let thirdPointer = arr[index]

        while(headIndex < tailIndex) {
            // skip duplicates by moving over
            const sum = arr[headIndex] + arr[tailIndex] + thirdPointer;

            head = arr[headIndex]
            tail = arr[tailIndex]

            if (sum > 0) {
                tailIndex--; // Decrease sum
            } else if (sum < 0) {
                headIndex++; // Increase sum
            } else{
                list.push([thirdPointer, arr[headIndex], arr[tailIndex]]);
                
                // Skip duplicates for head and tail
                while (headIndex < tailIndex && arr[headIndex] === arr[headIndex + 1]) headIndex++;
                while (headIndex < tailIndex && arr[tailIndex] === arr[tailIndex - 1]) tailIndex--;

                // Move pointers inward
                headIndex++;
                tailIndex--;
            }
        }
        
    }  

    return list
}

console.log(threeSum([-2, 0, 1, 1, 2]))
console.log("must be -> [[-2, 0, 2], [-2, 1, 1]]")
// console.log("")
// console.log(threeSum([0,0,0,0]));
// console.log("must be -> [[0,0,0]]");

