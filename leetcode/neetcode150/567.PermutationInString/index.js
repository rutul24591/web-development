/**
 * TC: 
 * O(N) where `N = s2.length`
  - Building frequency maps: O(26)
  - Sliding window over `s2`: O(N)
  - Each comparison of frequency arrays: O(26), done up to `N` times

  SC: O(1)
  - Two fixed-size arrays of length 26 (for lowercase letters)

  Idea: Sliding window approach
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length > s2.length) return false;

    const s1Map = new Array(26).fill(0);
    const s2Map = new Array(26).fill(0);
    const aCharCode = 'a'.charCodeAt(0);

    const matches = (s1Map, s2Map) => {
        for(let i = 0; i < 26; i++){
            if(s1Map[i] !== s2Map[i]){
                return false;
            }
        }
        return true;
    }

    // Initialize frequency maps for s1 and the first window of s2.
    for(let i=0; i < s1.length; i++){
        s1Map[s1.charCodeAt(i) - aCharCode]++;
        s2Map[s2.charCodeAt(i) - aCharCode]++;
    }

    console.log(`s1Map after initial for: `, s1Map);
    console.log(`s2Map after initial for: `, s2Map);

    // Slide the window through s2 and compare the maps
    for(let i=0; i < s2.length - s1.length;i++){
        if(matches(s1Map, s2Map)) return true;

        s2Map[s2.charCodeAt(i+s1.length) - aCharCode]++; // Add new character to window. d ie index 3 in map
        console.log(`s2Map for: `, s2Map);
        
        s2Map[s2.charCodeAt(i) - aCharCode]--; // Remove old character from the window. e ie index 4 in map
    
        console.log(`s2Map for 2: `, s2Map);
    }

    //Check the last window
    return matches(s1Map, s2Map);
};