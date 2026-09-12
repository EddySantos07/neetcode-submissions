class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {// mono queue increasing\
        /* 


            alright so we need to find the greatest in the window /  greatest num
            
            how do we achieve this? any constraints?

            well one thing we have to consider is that what if we wana keep track of the num the greatest num?
            what dsa do we use?

             if we use a stack we have to pop it off till we have a bigger one and to get
             the biggest one on the bottom of the stack? this would defy the stack properties 

             if this us the case we can just use a queue / dequeue dequeue meaning we deqeueu from the front or back

             if we save only the nums we cant be able to check if that num is still within that window?

             how can we check? we can check by adding the index instead!

             this way we can always check the index instead of the num itself 
        */

        // we have to make the window

        // we have to have our result

        let result = [];

        let deque = [];

        let left = 0;

        for (let i = 0; i < nums.length; i++) {
            // now for the window
            let num = nums[i];


            // now we always have to add the top num
            while ( num > nums[deque[deque.length - 1]]  ) {
                // while the num is greater than the last ele in deque

                // remove it
                deque.pop();
            }

            // afterwards we can add it to the deque
            deque.push(i);

            if ( left > deque[0] ) {
                deque.shift();
            }

            if ( i + 1 >= k ) {
                // if our right is now within our window then we can start deleting
            
                // now when we have all our nums in the deque and they are ordered based on size

                // now we have to move our left pointer and push the greatest to the result

                // then we take the last greatest in the deque and push it to result

                // this says that if our left is our of the window of our greatest then we can remove it
                
                result.push(nums[ deque[0] ])
                
                // now that we added the largest to our result and removed it in our deque 

                // remember we have to add the current greatest to the result every window move
                

                left++; // after we reached our window we can move left forward
            }

        }

        return result;
    }
}
