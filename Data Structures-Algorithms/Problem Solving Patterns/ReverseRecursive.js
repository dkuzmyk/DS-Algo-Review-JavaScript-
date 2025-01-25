function reverse(string){
    // add whatever parameters you deem necessary - good luck!
    let ret = "";
    function helper(string){
        if(string != ""){
          helper(string.slice(1));
          ret += string[0];
        }else{
            return;
        }
    } 
    helper(string);
    return ret;
  }
  
  // console.log(reverse('awesome')) // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'