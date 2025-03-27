# Group Anagrams - JavaScript Solutions

## Problem Statement

Given an array of words, group words that are anagrams of each other.

### Example Input:

```javascript
let words = ["eat", "tea", "tan", "ate", "nat", "bat"];
```

### Example Output:

```javascript
[
  [ 'eat', 'tea', 'ate' ],
  [ 'tan', 'nat' ],
  [ 'bat' ]
]
```

## Solution 1: Sorting-Based Approach

### Approach

1. **Sort each word alphabetically** to generate a unique key for anagram groups.
2. **Use a hash map**, where:
   - The key is the sorted version of the word.
   - The value is an array of words matching that key.
3. **Iterate through all words**, sort them, and store them in the map.
4. **Extract and return grouped anagrams**.

### JavaScript Code

```javascript
function groupAnagrams(words) {
    let anagramGroups = new Map();

    for (let word of words) {
        let sortedWord = word.split('').sort().join('');
        if (!anagramGroups.has(sortedWord)) {
            anagramGroups.set(sortedWord, []);
        }
        anagramGroups.get(sortedWord).push(word);
    }

    return Array.from(anagramGroups.values());
}
```

### Time Complexity

- Sorting each word: `O(k log k)`, where `k` is the word length.
- Iterating through `n` words: `O(n)`.
- **Total complexity**: `O(n * k log k)`.

### Space Complexity

- HashMap storage: `O(n * k)`.

---

## Solution 2: Character Frequency Hashing (Optimized Approach)

### Approach

1. **Create a frequency array (size 26)** for each word.
2. **Convert the frequency array into a string signature**.
3. **Use the signature as a key in a hash map** to group anagrams.
4. **Extract and return grouped anagrams**.

### JavaScript Code

```javascript
function groupAnagrams(words) {
    let anagramGroups = new Map();

    for (let word of words) {
        let charCount = new Array(26).fill(0);
        for (let char of word) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        let key = charCount.join('#');
        if (!anagramGroups.has(key)) {
            anagramGroups.set(key, []);
        }
        anagramGroups.get(key).push(word);
    }
    return Array.from(anagramGroups.values());
}
```

### Time Complexity

- Creating frequency signature: `O(k)`.
- Iterating through `n` words: `O(n)`.
- **Total complexity**: `O(n * k)`, which is **faster than sorting**.

### Space Complexity

- HashMap storage: `O(n * k)`.

---

## Comparison of Both Approaches

| Approach                         | Time Complexity  | Space Complexity | Advantage             |
| -------------------------------- | ---------------- | ---------------- | --------------------- |
| **Sorting (**\`\`**)**           | `O(n * k log k)` | `O(n * k)`       | Simple and effective  |
| **Frequency Hashing (**\`\`**)** | `O(n * k)`       | `O(n * k)`       | Faster for long words |

Both approaches have the same space complexity, but the **frequency-based hashing approach is more efficient for long words** because it eliminates sorting.

## License

This project is released under the MIT License.

