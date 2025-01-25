/**
 * Find a substring in a string with O(n)
 * String: "abcdefghi"
 * Find: "def"
 * Return index: 4
 */

function findSubstring(str="", sub=""){
    let counter = sub.length;

    for(let i=0; i<=str.length; i++){
        if(counter===0) return i - sub.length;
        if(str[i] === sub[sub.length - counter])
            counter--;
        else
            counter = sub.length;

    }
    return -1;
}


console.log(findSubstring("abcdefghi", "def"), 3);
console.log(findSubstring("abcde", "cd"),2);
console.log(findSubstring("abcde", "de"),3);
console.log(findSubstring("abcde", "abc"),0);
console.log(findSubstring("abcde", "abcde"), 0);
console.log(findSubstring("abcde", "z"),-1);