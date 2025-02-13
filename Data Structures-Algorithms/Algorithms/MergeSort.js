// first find a way to merge 2 sorted arrays while sorting them between each other

function merge(arr1, arr2){
    let ret = []
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            ret.push(arr1[i]);
            i++
        }else{
            ret.push(arr2[j]);
            j++;
        }
    }

    // now add the remainders of the arrays
    while(i < arr1.length){
        ret.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        ret.push(arr2[j]);
        j++;
    }

    return ret;
}

// console.log(merge([1,3,5],[2,4,6])) // [1,2,3,4,5,6]
// console.log(merge([1,2,3],[4,5,6])) // [1,2,3,4,5,6]
// console.log(merge([1,2,3,4,5,6],[])) // [1,2,3,4,5,6]
// console.log(merge([],[1,2,3,4,5,6])) // [1,2,3,4,5,6]
// console.log(merge([1,2,3],[4,5])) // [1,2,3,4,5]

// break the array down to length <= 1
// then use merge to sort them all the way from len <=1

function mergeSort(arr){
    if(arr.length<=1) return arr;
    return merge(mergeSort(arr.slice(0,Math.floor(arr.length/2))),  mergeSort(arr.slice(arr.length/2)));
}

console.log(mergeSort([3, 1, 4, 5, 9, 2, 6, 5, 3, 5])); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
console.log(mergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(mergeSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
console.log(mergeSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
console.log(mergeSort([2, 3, 5, 1, 4])); // [1, 2, 3, 4, 5]
console.log(mergeSort([1])); // [1]
console.log(mergeSort([])); // []

