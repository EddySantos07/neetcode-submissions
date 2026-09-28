class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        /* 
        
        i would check if the current num is top or not meainng that 

        is it the top number and can we go backwardws from it and how many times

        so im thinking we save all the nums in a hash

        then we go through the hash and check if it has a next if not we can start there and check if it has a before and run a loop to check if it has more than 1 before

        after we check which one is the largest value
        
        */

        let seen = {};

        for (let i = 0; i < nums.length; i++) {
            seen[nums[i]] === undefined ? seen[nums[i]] =1 : null; 
        }

        // now that we collected and seen them once, we have to check if they are consecutive

        for (let key in seen) {
            // check if they have a next 

            let next = Number(key) + 1

            if ( seen[next] === undefined ) {
                let consec = Number(key) - 1;
                while( seen[consec] !== undefined ) {
                    seen[key]++;
                    consec--;
                }
            }
        }
        // once we have all of our nums checked for their consecutive nums
        // we check the longest one

        let result = 0;

        for (let key in seen) {
            if ( seen[key] > result) result = seen[key];
        }

        return result;
    }
}
// almost but we have to redo!! 

// checking adn adding a + 1 is a string and combinging strings
