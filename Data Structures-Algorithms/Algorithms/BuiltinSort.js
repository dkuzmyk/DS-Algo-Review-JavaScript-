function comparator_1(num1, num2){  // comparator looks at pair -> if returns negative number then num1 comes before num2 
    return num1-num2;
}

console.log([6,4,15,10].sort(comparator_1))


function comparator_len(str1, str2){  
    return str1.length-str2.length;
}

console.log(["abc", "abcde", "abcdefg", "ab"].sort(comparator_len))
