class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        /* 

            okay since this array is sorted

            we can use a two pinter method where we take the least and greatest

            starting at each end

            we would move based off if our sum of the left and right is greater than or less than the target

            if our sum is greater than we know we have too much of a greater num on the right 
            so we move our right pointer down

            if the opposite happens we move the left pointer left

        */


        let left = 0;
        let right = numbers.length - 1;

        for (let i = 0; i < numbers.length; i ++) {

            let sum = numbers[left] + numbers[right];

            if ( sum > target) {
                right--; // move our right downwardds to find a smaller number closer to target  
            } else if ( sum < target ) {
                // if we have too small of a sum we move upwards to find a bigger num next to our target
                left++;
            } else {
                // we found our target
                return [ left + 1, right + 1 ];
            }
            
        }

    }
}
