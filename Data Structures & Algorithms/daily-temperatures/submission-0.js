class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        /* 
            okay so my thoughts are bvrutre force where we have our first loop on i

            then find the next days with j loop

            this is brute force, time would be  - n^2

            but then how can thsi be better? how can we make it faster


            ///////////// checking the solution well here were my thoughts before the solutionb

            alright so i was thinking of going through i and theen when we had a greater value of the stack of the top of the stacvk

            so we would pop till we are less than or = to the other elements in the stack 
            but then this would beg the question every element we woluld pop we had to know where to specificaly place the distance bewteen distances in our result

            so the answer to the questions to this would be 
            to store the index and calulate it from there

            now i suugested we go from left ot right but the hints suggest from right to left

            if we go from left to right

            for ex - 38, 35, 34, 40

            we would add 38 35 34 to the stack then we would be on 40

            and we would then take 

            the difference bewtwen every poped element

            and place it in the result

            result [ 3,2,1,0 ]

            moves 4 + 3

            now what if we do right to left

            for ex - 38, 35, 34, 40

            result - [ 0,0,1,0 ]

            // looking at the solution / hint is that we can go from left to right by getting the element thats greatest abnd replace

            so lets say we are on 40

            we add 40 to the stack

            is 34 less than 40? yes

            stack - 40, 34,

            is 35 less than 40? yes

            40, 34, 35

            is 38 less than 40? yes,

            40 34 35 38then we go through it again

            and do the calculations? 

            yeah no i think the answer i was looking for was left to right because
            it says the next greater element 

            so go to 2, 1, 1, then 3
        */

        // we have to have our result the size of our inputs and if we cant find one thats bigger than we have to use a 0
        let result = new Array(temperatures.length).fill(0);
        let stack = [];
        // we go through the temperatures and then we see if thes tack is empty and we need to add or if the current elemetn is greater thanthe rest

        for (let i = 0; i < temperatures.length; i++) {

            let temperature = temperatures[i]

            while ( temperature > temperatures[stack[stack.length - 1 ]] ) {
                let temp = stack.pop();
                let distance = i - temp;

                result[temp] = distance;
            }

            stack.push(i);
        }

        return result;
    }
}
