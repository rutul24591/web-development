/**
 *       TC: O(N * M) One iteration over array and inclues is O(M)
 *       SC: O(N)     We have to return result.
*/

function findWordsContaining(words, ch) {
    let result = [];
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(ch)) {
            result.push(i);
        }
    }
    
    return result;
}


// Test cases
console.log(findWordsContaining(["leet", "code", "love", "you"], "e")); // [0, 1, 2]
console.log(findWordsContaining(["apple", "banana", "cherry", "date"], "e")); // [1, 2]
console.log(findWordsContaining(["hello", "world", "java", "script"], "o")); // [1, 2]
console.log(findWordsContaining(["hello", "world", "java", "script"], "x")); // []


