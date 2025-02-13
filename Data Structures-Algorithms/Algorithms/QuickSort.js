/*
  	- Designate a pivot point -> median is best, all points work though
	- Rearrange elements < P to the left and >  P to right 
	- Order of elements doesn't matter
	- Do in place, no new arrays
    Return index of pivot
*/



function pivot(arr, start=0, end=arr.length -1) {
    if (typeof comparator !== 'function') {
        comparator = (a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        };
    }

    let idx = start;

    for(let i = start+1; i <= end; i++){
        if(comparator(arr[start], arr[i])>0){
            idx++
            [arr[idx], arr[i]] = [arr[i], arr[idx]];
        }
    }

    [arr[idx], arr[start]] = [arr[start], arr[idx]];

    return idx;

}

// console.log(pivot([4,5,2,3,1,7,6,8]));
// console.log(pivot([100,-3,2,4,6,9,1,2,5,3,23]))


function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){
        const mid = pivot(arr, left, right);
        quickSort(arr, left, mid-1);
        quickSort(arr, mid+1, right);
    }
    
    return arr;
  }


console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))
console.log(quickSort([4,5,2,3,1,7,6,8]));
console.log(quickSort([1,2,3,4,5]));
console.log(quickSort([5,4,3,2,1]));
console.log(quickSort([1,1,1,1,1]));
console.log(quickSort([5,1,2,3,4]));
console.log(quickSort([7,6,5,4,3,2,1]));
