class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        // i can collect the amount and the numbers seen in a hash 

        // this will allow me to place the number that appears x times in a bucket in an arr that holds these buckets

        // for xample - [1,2,2,3,3,3] and k = 2

        // we then transform it into this - 

        // - {1:1, 2:2, 3:3}

        // then our result would be something like this 

        // [ [1] [2] [3] [] [] [] ]

        // we place the 3 where the 3 belongs in the index where it belongs but instead of 0 index based we do 1 index based we then go backwards and grab the nums from the bucket
        if ( nums.length === 0 ) return [];

        let seen = {};

        let result = Array.from({ length: nums.length }, () => ([]));   // fixed bucket
        for (let i = 0; i < nums.length; i ++ ) {
            // here we count them only

            seen[nums[i]] === undefined ? seen[nums[i]] = 1: seen[nums[i]] ++;
        }

        // now that we have our counts

        // we have to bucket them

        for (let key in seen) {
            // place the num in its corresponding location  
            let index = seen[key] - 1;
            
            result[index].push(key);

        }

        // console.log(result - "result")

        let finalResult = [];
        let pushed = 0;
        for (let i = result.length - 1; i >= 0; i --) {
            let chars = result[i];

            for (let j = 0; j < chars.length; j++) {
                finalResult.push(chars[j]);
                pushed++;

                if (pushed === k) return finalResult;
            }
        }

        return finalResult;
    }
}
