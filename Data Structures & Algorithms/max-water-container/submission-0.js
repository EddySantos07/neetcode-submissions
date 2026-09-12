class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {

        /* 
        
        so basically we have to get the area between two bars 

        hence the height

        if we have 2 different heights the smallest one has to be multiplied by 2 giving the area of the max water 

        but how do we find the height of the largest of the 2 respect to the largest area formed by it as well

        for example we could have 2 bars with  8 x 8 bars right 

        2 bars then we have to factor in the space bewteen those twp bars say they have 8 height

        and the width soerating them is 4 blocks

        so width x height = 4 x 8 = 32

        but then we have another 2 bars of 

        7 and  6 

        but the width now is 7 
        so wdith x height = 6 x 7 wdith between them is 7 and max height is 6 = 42

        but in this case it seems we have to - 1 because 7 - 1 = 6 x 6 = 36

        but how do we get the 2 of them  how can we tell whats the biggest area?

        we start at both left and right this tests if we could get the biggest area automaticlay right

        we save the area we get in the first place
        but in order to find the larget we have to check our left and right poles

        whcih one is smaller? if the left is smaller then we move left one forward 

        then we do it again save and then whats smaller? the left? we keep moving it 
        save again and if the right one is smaller this time we move the right one to the left
        */

        let l = 0;
        let r = heights.length - 1;

        // we have to have our result here - 
        let maxWater = 0;

        for (let i = 0 ; i < heights.length; i++) {

            // now we have to grab left and right and calculate the distance 
            let leftBar = heights[l];
            let rightBar = heights[r];

            let distance = r - l ; 

            let leastBar = leftBar > rightBar ? rightBar : leftBar;

            let area = distance * leastBar;

            if ( area > maxWater ) maxWater = area;

            if ( leftBar > rightBar ) {
                r--;
            } else {
                l++;
            }
        }

        return maxWater;
    }
}
