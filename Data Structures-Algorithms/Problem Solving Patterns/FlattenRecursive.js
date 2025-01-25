
function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    let pota = [];
    function helper(arr, pota){
        // console.log("arr -> ", arr)
        if(arr.length === 0) return;
        if(!Array.isArray(arr[0])){
            //   console.log("pushing ",arr[0])
              pota.push(arr[0])
              helper(arr.slice(1), pota);
          }
        else{
            // console.log("entering the inner array")  
            helper(arr[0], pota);
            helper(arr.slice(1), pota);
        }
    }
    helper(arr, pota);
    return pota;
  }

 console.log( flatten([[[4, 5]]])) // [4, 5]
 console.log( flatten([[[4, 5], [8, 9]]])) // [4, 5, 8, 9]
 console.log( flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
//   flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
//   flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]