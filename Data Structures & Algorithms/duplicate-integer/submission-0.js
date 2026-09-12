class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        // for this i simply have to use a hashmap if the length is the same then its false if not true

        let result = new Set(nums);
        return result.size === nums.length ? false : true;
    }
}
