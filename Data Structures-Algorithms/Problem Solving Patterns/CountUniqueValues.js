function countUniqueValues(arr=[]){
    // I don't see why one should use two pointers for this, all you need is a hashmap
    
    let potato = {};
    for (let val of arr) {
        if(!potato[val])potato[val]=1
    }
    return Object.keys(potato).length
  }

  console.log(countUniqueValues([1,1,1,1,1,2]));
   