class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        // how to figure out if we have an anagram - 

        // we have to place these and hold them in a map to see thier count and then when passing over the other string we subsrtact that count and check at the end if we have all 0's

      let seen = {};

        // go through the first string length and save how much is seen
      for (let i = 0; i < s.length; i++) {
        seen[s[i]] === undefined ? seen[s[i]] = 1 : seen[s[i]]++;
      }

      for (let i = 0; i < t.length; i++) {
        let end = false;
        seen[t[i]] !== undefined ? seen[t[i]]-- : end = true;
        if ( end ) return false;
      }  

        for (let key in seen) {
            
            if ( seen[key] !== 0 ) {
                return false;
            }
        }

        return true;
    }
}
