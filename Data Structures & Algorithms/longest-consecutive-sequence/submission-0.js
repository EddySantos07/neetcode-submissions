class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        /* 
        
        okay soo in this problem we have to find out the longest sequence

        automaticaly i thought of just keping a counter to ee if the next element has the next consecutive sequcne

        but the problem says the nums can be scrambled 

        and can be anywhere adn then they can be consective that way

        next thought after that was okay use a map

        how do we use a map in this ocasion? well we go through the nums arr right

        then we have our map

        we find the num that is the start of the consecutive sequence for ex -


         [2,20,4,10,3,4,5]

         we go through and add every single one of our nums to the map 
         { 2, 20, 4, 10, 3, 4, 5}

         then we go through the arr again and say okay does 2 have a 1 in the map?

         no then 2 takes the lead for leader
        
        and then we do another loop to find the rest

        we keep a count for the first one so 1 is now our count 

        does 2 have a 3 in there ? yes  our count is now 2
        
        does 3 have a 4 in there? yes now our count is 3

        and does 4 have a lead 5? yes it has our count is now 4

        this concludes how we will do this the rest we check becuase we need to see if theres anyone greater but 
        other than that it will fly through the rest of the nums depending on what we see as a lead

        */


        let seen = {}

        let currentGreatest = 0;
        let greatest = 0;

        for (let i = 0; i < nums.length; i++ ) {
            seen[nums[i]] === undefined ? seen[nums[i]] = 1 : seen[nums[i]] ++;
        }

        for (let i = 0; i < nums.length; i++) {
            // now we have to check if the current num is a lead 

            let num = nums[i]

            if ( seen[num - 1] !== undefined ) continue;

            // we have our next num to see if its in seen if it is increase our counter
            currentGreatest++;

            let nextNum = num + 1;
            while ( seen[nextNum] ) {
                nextNum++; // increase to see if theres more consecutive
                currentGreatest++; // increase because we have a current consecutive
            }

            if ( currentGreatest > greatest ) greatest = currentGreatest;
            // if our current greatest is now our greatest then we also have to reset current greatest
            currentGreatest = 0;
        }


        return greatest;
    }
}
