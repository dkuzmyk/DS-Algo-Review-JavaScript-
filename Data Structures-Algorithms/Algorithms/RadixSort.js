function numberDigits(arr){
    // givern an array, iterate thro each element and find how many digits it has
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        max = Math.max(max, arr[i].toString().length);
    }
    return max;
}

// console.log(numberDigits([123,1,23]));
// console.log(numberDigits([12333,1,23,333]));
// console.log(numberDigits([1255553,2,444,12,5555]));

function digitAtPosition(number, position){
    // given an integer 'number', find the digit at 'position' but from right to left
    // pos = 1, num = 12345 -> 123[4]5 
    return Number(number.toString()[number.toString().length-position-1]); 
}

// console.log(digitAtPosition(123, 2));

function howManyDigits(number){
    return number.toString().length;
}

function radixSort(arr=[]){
    let iterations = numberDigits(arr);

    for(let i = 0; i < iterations; i++){
        let buckets = Array.from({length : 10}, () => [])
        // iterate thro the numbers and populate the buckets
        for (let j = 0; j < arr.length; j++) {
            if(howManyDigits(arr[j])-1>=i){
                buckets[digitAtPosition(arr[j], i)].push(arr[j]);
            }else{
                buckets[0].push(arr[j]);
            }

        }
        // create a new arr formed from the buckets 
        arr = [].concat(...buckets); 
    }

    return arr;
}

console.log(radixSort([12,23,334,55456,8,3,223,999,1111,55]))


