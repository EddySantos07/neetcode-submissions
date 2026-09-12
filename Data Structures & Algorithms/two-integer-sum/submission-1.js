class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // to solve two sum you need to find two values that add up to each other but thje way to do this is that when we go through the values if we dont have our target - current value then the value that is present target - curr is not present in somethihg that we haev to find we aggregate curr num to it till we find our difference

        let seen = {};

        for (let i = 0; i < nums.length; i++) {
            if ( seen[target - nums[i]] === undefined ) {
                seen[nums[i]] = i; 
            } else {
                return [ seen[target - nums[i]], i ]
            }
        }
    }
    // finsihed in 6 mins o n solution
}
