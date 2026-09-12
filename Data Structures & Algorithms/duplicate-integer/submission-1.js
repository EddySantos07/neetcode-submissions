class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let filtered = new Set(nums);

        return filtered.size === nums.length ? false : true;
    }
}
