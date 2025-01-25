/**
 * Given a sorted array of integers, write a function called "search(arr, val)" that also accepts a 
 * value and returns the index where the value is within the given array "arr."
 * return -1 if the value is not present. 
 * 
 * eg:
 * search([1,2,3,4,5,6],4) -> 3 
 * search([1,2,3,4,5,6],6) -> 5 
 * search([1,2,3,4,5,6],11) -> -1 (not present)
 */

function search(arr=[], val=0){
    let left = 0;
    let right = arr.length-1;
    let m = Math.floor((right+left)/2);

    while(right>=left){
        console.log("left -> " + left + ", right -> " + right + ", m -> " + m);
        console.log("(arr[m] == val) " + arr[m] + "==" + val);
        if(arr[m] == val)
            return m;
        // move left
        if(arr[m] > val) {
            right = m-1;
            m = Math.floor((right + left)/2);
        }
        // move right
        else{
            left = m+1;
            m = Math.floor((right + left)/2);
        }
        
    }
    return -1;
}

console.log(search([1,2,3,4,5,6],4) +" -> "+3) 
console.log(search([1,2,3,4,5,6],6) +" -> "+5) 
console.log(search([1,2,3,4,5,6],11) +" -> "+-1) 