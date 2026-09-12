class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

       /* 
       what im thinkning is this - 

       if we need two indicies to add up to the target and we need to return the

       two indicies in an array format then we have to keep track of one of the indicies

       this means that we can go through and we can use a little bit of math since our smallest indicie comes first

       our i will be our second indicie

       we go through the arr, we then have a target of 10 ex

       we take our target since its the biggest adn we then subsrtact our current i from it meaning that
       if we take away our i from target we will then have a value that we can see if we have already seen it 
       this will map to an indicie in our arr
       
       */

      let seen = {};

      for (let i = 0; i < nums.length; i++) {
        
        if ( seen[target - nums[i]] === undefined ) {
            seen[nums[i]] = i;
        } else {
            return [seen[ target - nums[i]], i];
        }
      }
    }
}
