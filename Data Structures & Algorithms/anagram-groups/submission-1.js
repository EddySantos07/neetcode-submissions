class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        // so we have top find anagramans and check if they are anagrams

        // then we have to bucket them, how do we that?
        // we store all of them in an arry, and that arr will have all anagrams based off something to let them in 

        // for example we can collect them first and then orgtanize in a different datab structure now after that we sort them based off anagrams but we can soprt them based of type / there musst be a key for the type

        // the type is the key

        // what kind of key are we looking for? 

        // edge cases can incluide we can sort the anagram itslef to make it as a key but that would be o n tuimes the amount of words that are in there so it would be n much slower

        // another solution we have is to do a hash of that key but then we would have to worry about collisions and stuff like that

        // next we can use some sort of hash meanibng that we can use the alphabet to solve this for exmaple 

        // the alphabet would contain 26 kets and the wword / anagram would dictate the alphabets 0's to 1's++

    // then it would be a key, turn the word into the key get it and if the key is within or not within make the approopriate decision
        let keys = {};

        for (let i = 0; i < strs.length; i++) {

            // in here we would first make the anagram a key
            let key = anagramKey(strs[i]); 

            // then after we have to check if its in our list of keys
           keys[key] === undefined ? keys[key] = [strs[i]] : keys[key].push(strs[i]);
        }

        // make word key
        function anagramKey(str) {

            // make an arr the size of the alphabet
            let alpha = Array(26).fill(0);

            // go through the str and then for each charachter up the incrument in the arr for the specific charachter value of the alphabet

            for (let i = 0; i < str.length; i++) {
                // for each charachter we have to convert it into a special charahcter then that will give us the index and that index and ibn the alphabet that value will be incuirmented up

                let index = str.charCodeAt(i) - 97;

                alpha[index]++;
            }

            return alpha.toString();
        };

        let result = [];

        for (let key in keys) {
            result.push(keys[key]);
        }

        return result;
    }
}
