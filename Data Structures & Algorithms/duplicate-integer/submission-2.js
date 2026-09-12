class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // if we have nums different kind of nums or the same, it woill appear when we place it in a map / set

        let duplicate = new Set([...nums]);

        // have a new set compare the lengtrh of the set to length of nums

        return duplicate.size === nums.length ? false : true;
    }
}
