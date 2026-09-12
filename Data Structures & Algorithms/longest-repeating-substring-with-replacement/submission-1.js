class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        /*
        
            for this problem we are given a string right

            and then we want all fo the chars to be a single distinct char

            but then how do we achieve this result?

            the way we achieve this result in the most optimal time we can is
            when go through the string we keep track of the longest string

            and we also keep track of the most frequent char

            the most frequent char = to how long the str will be and
            how many changes we can do that is less or = to k

            1) we keep our variables the most common char
            2) we then have a result to see if its the greatest we see
            3) we go through the string

            4) we then see if we have a char or not if we dont we add it to our seen 
            5) once we have added or incrimented our char

            6) we then check if the length of the string

            say 1 minus the remainder of the char 
            length - commonChar = 1 - 1 = if this is greater than k 
            which its not 

            if it is tho lets say it is then we update our result to see whats greater

            then we decriment seen of char

            we move our left pointer
        
         */

        let commonChar = 0;

        let left = 0;

        let seen = {};

        let result = 0;

        for (let i = 0; i < s.length; i++) {

            // here we add our seen or incriment
            seen[s[i]] === undefined ? seen[s[i]] = 1 : seen[s[i]] ++;

            // current char can be most common char
            commonChar = seen[s[i]] > commonChar ? seen[s[i]] : commonChar;

            // now we check if the length - commonchar exceeds k if it does decriment
            while ( (( i - left + 1 ) - commonChar ) > k) {
                // result = i - left + 1 > result ? i - left + 1 : result;

                // now move our pointer and deriment
                seen[s[left]] --;
                left++;
            }

            result = i - left + 1 > result ? i - left + 1 : result;

        }

        return result;
    }
}
