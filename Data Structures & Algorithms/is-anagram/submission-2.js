class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // here i can put one of the strings into a map
        
        // then i can go through the next str and decrease the times ive seen it in the map and if it passes less than 0 i know its not an anagram and if it has any remaning length then its not anagram


        // now for the edge cases i would say if s or t is length 0 return false

        if ( s.length === 0 || t.length === 0 ) return false;

        let map = {};

        for (let i = 0; i < s.length; i++) {
            map[s[i]] !== undefined ? map[s[i]] += 1 : map[s[i]] = 1 
        }
        console.log(map)
        for (let i = 0; i < t.length; i++) {
            let curr = t[i];
            
            if ( map[t[i]] === undefined ) return false;

            map[t[i]] -= 1;

            if ( map[t[i]] === 0 ) delete map[t[i]];
        }
        
        if ( Object.keys(map).length > 0 ) return false;
        return true;
    }
}
