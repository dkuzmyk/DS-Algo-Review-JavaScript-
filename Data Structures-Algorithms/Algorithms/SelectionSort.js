// given a sorted array 0 .. n, iterate through the array such that for each element in the array arr[i], 
// iterate through the remaining array arr[i+m] to find the minimum value in arr[] and swap them arr[i] <-> arr[i+m].

function selectionSort(arr=[]){
    let minIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        minIndex = i;
        min = arr[i];
        for (let j = i+1; j < arr.length; j++) {
            if( arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }

    return arr;
}

console.log(selectionSort([5, 4, 3, 2, 1])) // [1, 2, 3, 4, 5]
console.log(selectionSort([1, 2, 3, 4, 5])) // [1, 2, 3, 4, 5]
console.log(selectionSort([5, 1, 3, 2, 4])) // [1, 2, 3, 4, 5]
console.log(selectionSort([2, 3, 1, 4, 5])) // [1, 2, 3, 4, 5]
console.log(selectionSort([4, 2, 5, 1, 3])) // [1, 2, 3, 4, 5]
console.log(selectionSort([1, 1, 1, 1, 1])) // [1, 1, 1, 1, 1]
console.log(selectionSort([3, 3, 3, 3, 3])) // [3, 3, 3, 3, 3]
console.log(selectionSort([1, 1, 1, 1, 0])) // [0, 1, 1, 1, 1]
console.log(selectionSort([0, 0, 0, 0, 0])) // [0, 0, 0, 0, 0]
console.log(selectionSort([])) // []
