/**     
 *      Sorting based approach. 
 *      Time Complexity: O(n * k * log(k))
 *      Space Complexity: O(n * k)   
 */
function groupAnagrams(words) {
    let anagramGroups = new Map(); // Map to store grouped anagrams

    for (let word of words) {
        // Sort the word to get the unique key
        let sortedWord = word.split('').sort().join('');

        // If key exists, push the word into corresponding array, else create a new array
        if (!anagramGroups.has(sortedWord)) {
            anagramGroups.set(sortedWord, []);
        }
        anagramGroups.get(sortedWord).push(word);
    }

    // Convert Map values to an array
    return Array.from(anagramGroups.values());
}


/**     
 *      Frequency based approach(Hashing)
 *      Time Complexity: O(n * k)
 *      Space Complexity: O(n * k)   
 */
function groupAnagramsOptimal(words) {
    let anagramGroups = new Map(); // Map to store grouped anagrams

    for (let word of words) {
        // Create frequency signature
        let charCount = new Array(26).fill(0);

        for (let char of word) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        // Convert array to a string key
        let key = charCount.join('#');

        // Store in map
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, []);
        }
        anagramGroups.get(key).push(word);
    }

    return Array.from(anagramGroups.values());
}

// Example usage:
let words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
console.log(groupAnagramsOptimal(words));