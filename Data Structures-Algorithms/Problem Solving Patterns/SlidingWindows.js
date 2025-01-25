/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n. 
 * The function should calculate the max sum of n consecutive elements in the array.
 */


function maxSubarraySum(arr=[], n=0){
    if(arr==[] || n===0) return 0;
    
    let maxVal = 0;
    let currentVal = 0;

    for (let index = 0; index < n; index++) {        
        currentVal += arr[index];
        maxVal = currentVal;
    }
    
    for (let index = 0; index < arr.length-n; index++) {
        currentVal -= arr[index];
        // console.log("currentVal - arr[index] -> " + (currentVal+arr[index]) + " - " + arr[index] + " = " + currentVal);
        
        currentVal += arr[index+n];
        // console.log("currentVal + arr[index+n] -> " + (currentVal-arr[index+n]) + " + " + arr[index+n] + " = " + currentVal );

        maxVal = Math.max(maxVal, currentVal)
    }

    return maxVal;

}

console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3)+" == 19?");
console.log(maxSubarraySum([1,2,5,2,8,1,5],2)+" == 10?");
console.log(maxSubarraySum([1,2,5,2,8,1,5],4)+" == 17?");
console.log(maxSubarraySum([4,2,1,6],1)+" == 6?");
console.log(maxSubarraySum([4,2,1,6,2],4)+" == 13?");
console.log(maxSubarraySum([],4)+" == null?");
console.log(maxSubarraySum([10, -2, 3, 1, -5, 7, 2, 8, -1], 3) + " == 17?"); // Maximum sum is from subarray [7, 2, 8]
console.log(maxSubarraySum([5, 1, 2, -1, -2, 3, 6, 4, -3], 4) + " == 11?"); // Maximum sum is from subarray [3, 6, 4, -3]
console.log(maxSubarraySum([-1, -2, -3, -4, -5], 2) + " == -3?"); // Maximum sum is from subarray [-1, -2]
console.log(maxSubarraySum([100], 1) + " == 100?"); // Single element array returns the element itself
console.log(maxSubarraySum([3, 7, 1, 8, 2, 6, 4], 5) + " == 24?"); // Maximum sum is from subarray [7, 1, 8, 2, 6]
