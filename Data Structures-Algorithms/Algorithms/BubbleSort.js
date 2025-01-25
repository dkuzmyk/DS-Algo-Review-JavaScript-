function bubbleSort(arr=[]){
    // iterate through the array and compare i and i+1, if i>i+1 then swap them. 
    // continue the same process until you push the highest number to the end.
    let counter = arr.length;

    while(counter >= 0){
        for (let index = 0; index < arr.length - (arr.length - counter) - 1; index++) {
            if(arr[index] > arr[index+1]){
                let tmp = arr[index+1];
                arr[index+1] = arr[index];
                arr[index] = tmp;
            }
            
        }
        counter--;
    }
    return arr;
}

console.log(bubbleSort([22, 4, 15, 10, 1 ]))
console.log(bubbleSort([5, 1, 4, 2, 8]))
console.log(bubbleSort([5, 1, 4, 2, 3, 6, 8]))
