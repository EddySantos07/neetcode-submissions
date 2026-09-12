class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        /* 
        
        for this we have k elements wanted and a random order or elements

        for this im thinking n time

        we go through and we just grab the elements we seen and add a counter to them

        other than that at the end we sort and splice 

        sorting is n log n which is already too much so we have to find a way to keep it in n time   
        */

        // first solution n log n time
        /*
        let result = {}

        for (let i = 0; i < nums.lenght; i++) {
            !result[nums[i]] ? result[nums[i]]++ : result[nums[i]] = 1;
        }

        return Object.entries(result).sort((a, b) => { a[1] - b[1] }).slice(k + 1);
        */

        // alright so we need a modified bucket sort this bucket sort is modified becuase we need to keep the n number of buckets and in the buckets add what ever we seen the most based off how many times we seen it
        // ex - [ 0, 1, 2 ] 2 buckets 0 doesnt count, then in this wee need to aggregate in the buckets what we seen how many times if we seen 2 2 times then in the 2 bucket it goes if we seen 3 1 time then 3 goes in the 1 bucket etc

        let seen = {};

        let bucket = new Array(nums.length + 1).fill().map((_,i) => i)

        for (let i = 0; i < nums.length; i++) {
            !seen[nums[i]] ? seen[nums[i]] = 1 : seen[nums[i]] ++;
        }

        for (let key in seen ) {
            let indx = seen[key];

            // now we need to take the curr eleemnt we are on and get the occurence of it and map it to our bucket
            Array.isArray(bucket[indx]) ? bucket[indx] = [...bucket[indx], key]: bucket[indx] = [key];
            
        }
        // console.log(bucket ,"bucket")
        
        let result = [];

        for (let i = bucket.length - 1; i >= 0; i --) {
            let currBucket = bucket[i];

            // console.log(currBucket, "curr bucket")
            if ( Array.isArray(currBucket) && currBucket.length >= 1 ) {
                for (let j = 0; j < currBucket.length; j++) {
                    result.push(currBucket[j])
                    // console.log(result, "result")
                    // console.log(bucket, currBucket, "-", j, i)
                    k--;

                    if ( k <= 0 ) return result;
                }
            }
        }
    }
}
