class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

           /* 
        
        for a three sum i would be thinking of like 2 pointers with maaybe like nums 
        i being the 3rd pointer

        we first have to have our results arr

        then we would declare a 2 pointer method this 2 pointer

        would then be greater than i always and the left pointer would be less than i

        another approach im thinking is if we sort the array

        this gives us a time of n log n worst case

        then from this we can go from left to right pointers again

        for example - 

        -4, -1, -1, 0, 1, 2

        left = -4

        right = 2

        i = -1 so if (-4 + -1) = -5 + 2 = -3

        this is too small so we move our i to the right
        now i = -1 still too small
        how bout 0 ?

        -4 + 0 + 2 = -2
        still too small

        how bout 1? 

        -4 + 1 + 2  = -1 still too small

        this concludes this ones search
        because i is now one less than our right index

        now if the last sum was too small we need to move left up

        if left moves up we would then get this sum - 
       ( -1 + -1 ) = -2 + 2 === 0 
       this would be our first sum of 0 

       we would then take these 3 nums and add them to our arr 


       now when we have our first sum we then move our right pointer up and i is always moved with it forwards well we can have i
       as a 3rd pointer as to not get confused

       we can work this all the way and have conditions that seperate the 3 indexes 

       as long as left index doesnt pass middle index adn middle index doesnt pass rigth index as well as rigth index is always greater than middle indx
       we good

       if our sum is too large we must move right index to the left
        
        */


        // make the index's 
        let left = 0;
        
        let mid = left + 1;

        let right = nums.length - 1;
        
        let sortedNums = nums.sort( (a, b) => a - b);

        let seenTrips = {}; // check if we seen our triplets

        let result = [];
        // console.log(left, mid, right, "test");
        console.log(sortedNums)
        while ( mid < right && right > mid ) {
            // console.log(result)
            let sum = sortedNums[left] + sortedNums[mid] + sortedNums[right];

            // console.log(seenTrips, result, sum)
            
            
            // check if sum is too 0 
            
            if ( sum === 0 ) {
                // we have to check if we seen our tripplets
                // console.log( [sortedNums[left], sortedNums[mid], sortedNums[right]] )
                if ( !isSeen([sortedNums[left], sortedNums[mid], sortedNums[right]]) ) {
                    
                    console.log("we push here outter - ", sum, "-sum", left, sortedNums[left], sortedNums[mid], sortedNums[right] )

                    result.push( [sortedNums[left], sortedNums[mid], sortedNums[right]] );

                    seenTrips[
                        [sortedNums[left], sortedNums[mid], sortedNums[right]].sort( (a, b) => a - b)
                    ] = 1;
                }
                

                // 25 mins passed at this point
                // okay after we pushed our sum of 0 into the arr we need to update our pointers shift our focus forward
                
               /// now what im thinking here is if we cant have no duplicate tripplets then we have to 
               // we have to clean it and sort it, n + n log n, then if we find a match that combination is through unless its less than or greater than target then we move middle
                // left++;
                // mid++;

                // since our left moves so does our mid
                right--;
            } else if ( sum < 0 ) { // else if thats not our target then we have to move to a new one with our mid
                // we keep moving our mid in a loop
                let tempRight = right;
                for ( let j = mid + 1; j < tempRight; ) {
                   
                    // now that we can scan the middle and seek our target same thing we check if greater than or less
                    let midSum = sortedNums[left] + sortedNums[j] + sortedNums[tempRight];
                    // console.log("is j moving", midSum, sortedNums[left], sortedNums[j], sortedNums[right])
                    if ( midSum === 0 && 
                        !isSeen([
                            sortedNums[left], sortedNums[j], sortedNums[tempRight]
                            ])
                         && j < tempRight
                        ) { 
                        
                        // here we also have to check if we seen our triplets 
                        console.log("we push here in for - ", midSum, "-sum", left, sortedNums[left], sortedNums[j], sortedNums[tempRight] )
                        
                        result.push( [sortedNums[left], sortedNums[j], sortedNums[tempRight]] );

                        seenTrips[
                            [sortedNums[left], sortedNums[j], sortedNums[tempRight]].sort( (a, b) => a - b)
                        ] = 1;
                    } else if ( midSum > 0 ) {
                        tempRight--;
                    } else if ( midSum <= 0){
                        j++;
                    }
                }

                left++;
                mid++;
            } else { // if the sum is not greater than its less when its less we move our right downwards
                right -= 1; 
                // the cycle begins again
            }
            
        }

        function isSeen (a) {
            return !!seenTrips[a.sort( (a, b) => a - b)];
        }
        // console.log(result, "result")
        return result;
    }
}
