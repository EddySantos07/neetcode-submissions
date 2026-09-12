class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        /* 

            first off we have to check if its an anagram so an anagram builder

            when the matching anagrams happen that becomes a group / one group of anagrams 

            // first we have to find a way to group them per sey

            so for example the first one act right

            we have to find out a way to say okay act will be in one group and so how do we distinguish or give this anagram a group in the first plac
            it has to have a key but what kind of key

            so first off we have to have a map

            the hint says we have to have a key which is the amount of times we have seen the elements in the arr

            okay so for example - 

            act has 3 elements only seeing it once

            each one a:1. c: 1 t: 1

            if this is the case this is our key

            for example if pots was the next one and we had to put it in a group or make a group for it

            it would be p:1 o:1 t:1 s:1 since we dont match this willl have its own group

            how to get key like this?

            we need to get a way to say okay this key is a string right
            and the string could be built or be likek this - a:1c:1t:1

            then our next element wil then have to be counted for each element would then be counted so

            for ex pots - p:1o:1t:1s:1 this key and this key - a:1c:1t:1 does not match up 

            but what datastructure can i use? id say a hashmap again but lets see the time

            going through the whole strs = n
            then hashing the strs = n 
            then seeing anther str = n comparing them would be 1

            so in total its n + n = 2n = n

            im thinking of trying it
        
        */

        // first off since we just comparing keys it wont be as bad so we need a map
        let keys = {};

        // go through the arr
        for (let i = 0; i < strs.length; i++) {
            
            let curr = strs[i];

            let key = formKey(curr);

            // now that we have our key with its frequencies
            
            // we have to see if it matches up to any key in our keys

            // now i didnt think of this through because if our keys has a key how can we be consistant with the shape /. form of key meaning 
            // the obj can have a randomized keys our key can be a random shape
            // how to keep keys uniformed and built one way? 
            // we turned to building out the array with a bunch of 0 and then filling it with the amount of times we seen each char from the string into its respected place
            // now we check if we have seen the key in our keys
            if ( !keys[key] ) { // if our key is undefined then we place our key = to [curr] and we place else push it in
                keys[key] = [curr];
            } else {
                keys[key].push(curr);
            }
        }

        function formKey ( s ) {
            const alphabetArray = new Array(26).fill(0);
            // we will count the elements in key

            for (let i = 0; i < s.length; i++) {

                const index = s[i].charCodeAt() - 97;

                alphabetArray[index]++;
            }

            return alphabetArray;
        }



        return Object.values(keys);
    }
}
