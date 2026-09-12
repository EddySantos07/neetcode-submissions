class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {


        /* 
        
        okay so for the first example we want to have 8
        how is this possible?  well from my understanding we must create a rectangle 

        and the size of the recatnagle must be on top and bottom the same 

        so the height of the ith char must be sleected by the smallest one that way everything is even

        for example the way i see that they got the 8 is
        they got to 7 then 2 2 4 

        4 bars means 1 for each bar which is 4 and then the 2 is the smallest 

        4 * 2 =  8 the area of the largest rectangle 

        okay soo the way i im thinking of a soltuion for this would be

        also remeber one single element is a rectangle 

        okay so we start off with the first charachter being the largest 

        aka 7 being the largest 

        as our rectangle result 

        then thats added to the stack

        stack - 7 

        then we go to 1 we then check if this one is greater than our current

        for example we have 2 positions now and thats  =  2 then our smallest one is 1

        so 2 * 1 = 2

        then if its smaller than our current one how do we know when to make a new rectangle thats the question

        /// after thinking about a solution i had to revert too the solution video and heres what was explined - 
        
        so we have to use a stack but how does the stack plays into this?

        so for example we have a char of 2 n then 1

        so 2 1

        for example we haev for the greatest 2 because nothing is in the stack and its the greatest one we seen so far
        so okay 2 is in the stack now right
        and then 1 is next so we are at one 

        now is one greater than 2 or = ? no then we have to pop off 2 becuase we cant create anything greater than 2 
        so 2 is popped off since 2 cant go into 1

        and we must select the smallest 

        so we popped off how ever many there was in the stack since we have to start again because we can only go up to the smallest

        and since this was the smallest the remaindning number in the stack aka

        2 meaning if 2 was the last one and then from 1 to 2 is also a rectnagle 
        2 is a rectangle and 1 to 2 is a rectangle


        so we have 2 as a rectangle 2 is the greatest and then
        1 to 2 is 2 * 1 = 2 meaning we do not have anything greater

        2 is the answer here 

        but what if we had 1 2 1

        okay so first 1 is the greatest right now

        and then we go to 2 is 2 greater than 1 then we add it to the stack 
        2

        opur stack is now 1 and 2 
        and then we reach one meaning we cant go any furthur 

        so if we are now on the 1 its less than 2 so we have to rerstart okay
        so we pop off all and when we pop off 2 im unsure what we can do with every char we pop off but i do know at the end we have toi
        compute the difference between the last and first elemernt 
        
        */

        // lets build out the layout so like 

        // the layouit will be okay we haev our stack for the horizontal rectangles

        // then we go through the lengths and check when we haev somiething smaller

        // then if we haev something smaller we then pop as long as the last numbher in the stack is greater thasn the current number


        // we then taek the indicie of where that last pop was meaning the indicie of the smmallest one 

        let stack = [];
        
        let greatest = 0;

        for (let i = 0; i < heights.length; i++) {
            let height = heights[i];
            
            let start = i;
            while ( stack.length > 0 && stack[stack.length - 1][1] > height ) {
                // now we have to calculate the horizontal rectangle

                let [indx, h] = stack.pop();

                console.log(stack,"STACK")

                let area = (i - indx) * h;

                if ( greatest < area ) greatest = area;

                start = indx; // start of current ith height
            }

            stack.push([ start, height ]);
        }
        console.log(stack)
        // after calculating the vertical rectangle 

        // calculate the rest of the horizontal ones if there is

        for (let i = 0; i < stack.length; i++) {
            // now we have to calculate the area of the horizontal

            let [indx, height] = stack[i];

            let area = (heights.length - indx ) * height;

            if ( area > greatest) greatest = area;
        }

        console.log(stack)
        return greatest;
    }
}
