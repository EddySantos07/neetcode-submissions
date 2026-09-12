class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        /* 
        
        so a permutation is a scrambled substring of a bigger string

        we have to see if all the consecutive letters of s2 match to the sub str of s1

        what im thinking is we add all of s1  into a seen map

        that would be n time and n space

        then we go through s2 and if the current letter of s2 matches to 

        s1 consecutivly with thier respective letters 
        then we can return true

        if nothing is matched then we return false;

        but this is n space not 1 space

         
        some edge cases are if s1 is greater than s2 we automaticaly return false

        ahh okay with anagrams we can use arrays

        for example if we use an array instead of a map
        we can set our array of 26 0's ad this will 

        keep track of the all the counnts of any charachter

        if we keep track of the counts of all the charachters we then can
        go through s1 and then we can compare if the count of s1 in s1 arr is = to s2 array

        if this is true then thats good if not we can return false

        remeber saving the count of charachters in an arr asci key format is very helpful to reach linear time and linear space

        */

        /*
        if ( s1.length > s2.length ) return false;

        // firsrt get 2 arrays one with s1 and s2's count in 2 arrays of 26

        let s1Count = new Array(26).fill(0);
        let s2Count = new Array(26).fill(0);

        let left = 0;

        // remember we can always have a new array with new array and the new array take a size, then we can call then .fill functiion to fill that array with what ever value we want
        // we then go through s1 our smallest str
        for (let i = 0; i < s1.length; i ++) {
            // convert charachter into asci key into index and have a count of it
            s1Count[ s1[i].charCodeAt() - 97 ] ++ // remeber to get the index we have to first get an ascii key of the char
        }

        // // go through s2
        // for (let i = 0; i < s2.length; i ++) {
        //    s2Count[ s2[i].charCodeAt() - 97 ] ++ 
        // }

        // now that we have our counts for both strings we go through s1 and see if s2 contains the same counts if not we return false
        
        // for (let i = 0; i < s1.length; i++) {
        //     // check if s1 charachter contains the same counts as s2
        //     let currIndex = s1[i].charCodeAt() - 97;
        //     if ( s1Count[currIndex] !== s2Count[currIndex]  ) return false;
        // }

        for (let i = 0; i < s2.length; i++) {
            // we have to check if we s2 has the same amount 
        }

        return true;


        THE ABOVE IS FAILED ATTEMPT AT THIS PROBLEM AS I DID NOT UNDERSTAND THE PROBLEM COMPLETLY

        ALSO the way to solve this is to  

        get the count of the values up to s1 legnth alone with s2 by itside

        then haev a count if they match up in a nother for looop

        */

        // alright so we build the data structure where they will be compared this is 
        let s1Seen = new Array(26).fill(0); // we want to fill our new array with 26 spaces and then fill them with 0's
        let s2Seen = new Array(26).fill(0);

        // once we have where we will compare then we do this
        // we have to fill in what we want to compare so for example the first sliding window will be
        // s1 filled values in the s1 arr we need to do this because we need the slidnig window when we go thjrough s2
        // to change with the window of s1 meanign for ex - 
        // we have a23 match on the first window we have to check if they match up cuase going through s1 is the first window of s2 as well
        // so now when we move on the next window we can update 23 to be 26 or even 20 
        // this will allow us to tell if its near 26 or not meaning if we got matches they are both updated to have the same chars at the same time!!

        // we make the first window for s1 and s2 to see if they match and to match up the rest to set up for our 26 window find
        for (let i = 0; i < s1.length; i++) {
            // here we have to grab the ascii of s1 of i and s2 of i
            let s1Key = s1.charCodeAt(i) - 97; // grab the charachter code of index i of s1
            let s2Key = s2.charCodeAt(i) - 97;

            s1Seen[s1Key]++; // on s1 charachter index update the char we seen
            s2Seen[s2Key]++;
        }

        let matches = 0;
        // now that we have our first window for comparison to s1 to s2 we have to go see if they have 26 or not and set up the rest for the next windows
        for (let i = 0; i < 26; i++) { // why 26? because we have 26 charachters to check
            // now we have to go through 0 - 26 of i index to see if they all match if not we have our first wnidow and we gotta check other windows
            matches = s1Seen[i] === s2Seen[i] ? matches + 1 : matches; // if they match then we incrimetn our matches if not we leave it
        }

        let left = 0;
        // now if they dont match up to 26 on the first window we know thats not the window and we haev to search for more
        for (let i = s1.length; i < s2.length; i++) { // lets go through s2 to find more windows
            // now we have to check if the matches are 26 and if so return
            if (matches === 26) return true;

            // now we have to move our window 
            // we have to first add s2 seen and incriment that 
            // and we have to remove left 
            let key = s2.charCodeAt(i) - 97;
            
            // right now we have to check this key if it matches to s1
            s2Seen[key]++;

            // we check if they right key is good frequency wise to incriment our matches if not we decriment
            if ( s1Seen[key] === s2Seen[key]  ) { // if the same charachter has the same frequency then matches++
                matches++;
            } else if ( s1Seen[key] + 1 === s2Seen[key] ) { // now if they do not match we have to check that too if its above since we incrimented this new char
                // we over seen it and now we have to decriment our matches
                matches--;
            }
            
            let leftKey = s2.charCodeAt(left) - 97;
            s2Seen[leftKey]--;
            
            // now we have to decriment the left side as we are leaving that side of the window and moving to a new window  
            if ( s1Seen[leftKey] === s2Seen[leftKey] ) {
                matches++;
            } else if ( s1Seen[leftKey] - 1 === s2Seen[leftKey]  ) {
                matches --;
            }
            
            left++; //  now we move left as the last thing
        }

        return matches === 26;
    }
}
