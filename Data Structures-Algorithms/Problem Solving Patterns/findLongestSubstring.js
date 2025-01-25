/**
 * Sliding Window - findLongestSubstring
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
1. findLongestSubstring('') // 0
2. findLongestSubstring('rithmschool') // 7
3. findLongestSubstring('thisisawesome') // 6
4. findLongestSubstring('thecatinthehat') // 7
5. findLongestSubstring('bbbbbb') // 1
6. findLongestSubstring('longestsubstring') // 8
7. findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n)
 */

function findLongestSubstring(string=''){
    if(string=='') return 0;

    let dict = {};
    let max = 0;
    let left = 0;
    let right = 0;

    for (right = 0; right < string.length; right++) {
        while(dict[string[right]]){
            left++;
            max = Math.max(max, right - left + 1);
            dict[string[left-1]] = false;
        }
        dict[string[right]] = true;
        
    }

    return Math.max(max, max, right - left);
}


console.log(findLongestSubstring(''), 0) // 0
console.log(findLongestSubstring('rithmschool'), 7) // 7
console.log(findLongestSubstring('thisisawesome'), 6) // 6
console.log(findLongestSubstring('thecatinthehat'), 7) // 7
console.log(findLongestSubstring('bbbbbb'), 1) // 1
console.log(findLongestSubstring('longestsubstring'), 8) // 8
console.log(findLongestSubstring('thisishowwedoit'), 6) // 6
