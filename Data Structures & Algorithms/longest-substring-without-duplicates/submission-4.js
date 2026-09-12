class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {


        /* 
        alright soo im thinking if i have to find a substring without repeating chars

        i first have to see if i have any records of repeating chars

        so that is a map

        and then i have to keep track of the current length of the string the longest str / greatest

        if its undefined we can add to our str length and if its defined we have to restart
        */

        // edge cases empty str;
        /*
        let seen = {};
        
        let curSubStr = 0;
        let result = 0;

        for (let i = 0; i < s.length; i++) {
            
            if ( !seen[s[i]] ) {
                seen[s[i]] = 1; // add our char to our seen

                curSubStr ++; // incriment count
            } else {

                if ( curSubStr > result ) result = curSubStr;

                curSubStr = 0; 
                seen = {};

                seen[s[i]] = 1;
                curSubStr++;

                if ( s[i - 1] !== s[i] ) {
                    seen[s[i - 1]] = 1;
                    curSubStr++;
                }
            }
        }

        result = curSubStr > result ? curSubStr : result

        return result;
        */

        // we have to try a different strategie because this one we dont get all the previous ones

        // so instead of just counting the new ones we have to place a pinter to where we start and then a pointer to wehre the 
        // duplicate element goes away;

        let seen = {};

        let left = 0;

        let curSubStr = 0;
        let result = 0;

        // now we go through the str 
        for (let i = 0; i < s.length; i++) {
            // now if we dont see anything we add it
            if ( !seen[s[i]] ) {
                seen[s[i]] = 1;

                curSubStr++; // incriment everytime its valid
            } else {
                
                // before we delete this is a sub str

                result = curSubStr > result ? curSubStr : result;

                // else its in there and we have to be like okay since its in there we have to find it till we see it again
                while ( seen[s[i]] ) {
                    delete seen[s[left]];

                    left++; // delete till we find it;
                    curSubStr --; // for every char deleted we remove the length of sub str
                }

                // when deletion is over we can add the curr ele and restart
                seen[s[i]] = 1;
                curSubStr++;
            }

        }
        result = curSubStr > result ? curSubStr : result;

        return result;
    }
}
