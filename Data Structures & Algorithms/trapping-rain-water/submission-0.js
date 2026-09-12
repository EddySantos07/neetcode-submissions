class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        /* 
        
        alright soo we haev to have 2 bars to hold water both of the bars has to be above 1

        if our starting point is with nothiing we keep moving along 

        soo okay looking at the bars or terrain

        we can clearly see that the water only goes up to the tallest bar
        and when it does it counts as 1 

        for example if we have a one bar at 1 and another at 2

        the water trapped in there with a distance of 1 
        would be 2 if there is 0 terrain in between 

        this means that we have to have our trapped rain water variable at 0 no rain trapped

        and when we look for trapped rain water we start at a bar heigher than 1 or = to 1

        we then traverse the terrain and for any thing thats less than the height of our starting bar

        we add the difference so if we have a terrain of 2 starting
        and going through the terrain the next would be 1 our difference is 1 so 1 to the seen water

        and if the next is higher than our staring thats our new starting point

        now if we have one thats smaller 
        
        ///////// after watching AND LEARNING THE SOLUTIION TO THIS PROBLEM!

        // we have a solution of n with n space too
        then we have a solution with n and 1 space

        the n time and space is with 3 arrays one going through to find the largest l at the current indx
        the second arr is going through the arr to the left ot find the largest right
        then when we go through the arr again we have to take the smallest of the 
        left and right and subsrtact from the current element

        so the smallest ( l || r ) - currEle gives us the difference and if the difference is above 0 
        we add it to our result counter

        if its less than we dont do nun and we keep going

        now for the n time and 1 space

        we keep 2 pointers 

        the 2 pointers works like this - 

        okayy so look 
        we have our left and right pointer right? they will move from left and right why?
        think about it this way our left pointer is all the way to the left and our right pointer is alk the way to the right
        then
        we have to search for our largest left terrain right?
        when we have our laregest left terrain we keep track of it so this will be our like left  side of the bucket

        and then we go through still when we find a new element we can take that element and then be like okay greatest left - current element soo

        this will give us our difference right meaning if the terrain we is on cant  hold any water we can tell that for ex - 
        greatest left = 2 and the terrain we are on is 3 then 2 - 3 is -1 it cant hold any water

        then we know that this terrain is the greatest!

        but what happens if we now have a greatest of 3 and our right pointer is 1 its smaller right? we haev to find the greatest of that side

        meaning we have a new bucket left side we have to find it s right side 

        soo that means our right pointer has to find if we can collect water till it 

        1) reaches the left side teerrain
        or 2) it gets greater than left side pointer

        */


        // lets do n time with space 1 solution first

        //now we have to keep track of greatets left and r pointers

        let greatestL = 0;
        let greatestR = 0;

        let left = 0;
        let right = height.length - 1;

        let count = 0 ;

        // now we have to go throught the terrain while our left and right pointers dont meet

        while ( left <= right ) {
            
            // now that we are looking through our terrains we have to check whats greater
            // we also have to find out whats the least from the greatest l or r to know whcih one to process first
            
            if ( greatestL > greatestR ) {
                // process greatest R first

                ( greatestR - height[right] ) > 0 ? count += ( greatestR - height[right] ) : null; // add the difference to our count if able to hold water

                height[right] > greatestR ? greatestR = height[right] : null; // check if the element is greater than our greatest r

                // now that we added the difference and checked if height is the same or not we haev to move right
                right--; // move the pointer forward
            } else {
                // process left because its either smaller or they the same

                ( greatestL - height[left] ) > 0 ? count += ( greatestL - height[left] ) : null; // add the difference to our count if able to hold water
            
                height[left] > greatestL ? greatestL = height[left] : null; 

                left++; // move left forward!
            }
        }

        console.log(left, right)
        return count;
    }
}
