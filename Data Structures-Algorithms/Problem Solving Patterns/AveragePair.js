jsconfig.json/**
Multiple Pointers - averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a 
pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.

Bonus Constraints:

Time: O(N)

Space: O(1)

Sample Input:

averagePair([1,2,3],2.5) // true
averagePair([1,3,3,5,6,7,10,12,19],8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([],4) // false
 */

function averagePair(arr=[], targetAvg=0.0){
    if(arr==[]) return false;

    let left = 0;
    let right = arr.length-1;
    let sum = 0.0;

    while(left < right){
        sum = (arr[left] + arr[right])/2;

        // console.log("left " + left + " right "+ right + " left value-> "+ arr[left] + " right value-> " + arr[right] + " sum: "+ sum)

        if(sum == targetAvg) return true;

        if(sum > targetAvg) right -=1;
        else left +=1; 
    }

    return false;

}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false