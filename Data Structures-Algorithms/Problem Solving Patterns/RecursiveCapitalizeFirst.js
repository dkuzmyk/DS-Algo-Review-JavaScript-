function capitalizeFirst (arr=[]) {
    let ret = [];

    function helper(arr, ret){
        if(arr.length===0) return;
        ret.push(arr[0][0].toUpperCase() + arr[0].slice(1, arr[0].length));
        helper(arr.slice(1), ret);
    }

    helper(arr, ret);
    return ret;
}
  
  console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']