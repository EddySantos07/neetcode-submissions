class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {

        // normal binary search

        let right = nums.length - 1;
        let left = 0;

        while ( left <= right ) {

            let curr = Math.floor( ((right - left) / 2) + left);
            // console.log(curr, "curreentt")
            if ( nums[curr] === target ) {
                return curr;

            } else if ( nums[curr] > target ) {
                right = curr - 1;
            } else if ( nums[curr] < target ) {
                left = curr + 1;
            }
        }
        

        return -1;
    }
}
