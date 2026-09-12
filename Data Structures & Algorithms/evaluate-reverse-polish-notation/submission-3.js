class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        /* 
        okay soo thinking about the solution we need to find the operand then anything before it needs to happen to thos numbers

        for example in ex 1 - we have a + 

        so for the nums 1 + 2 they need to be summed

        this and then we need to keep track of the result / sumn and apply the next operand to the sum

        for this i think we can use a stack

        so we find the nums 

        for example 1 we add it to the stack then we add 2 to the stack

        and then the operand once we reach and opperand we then have to pop from the stack!

        so okay we reach + right thewn what do we do?

        okay we have our count so its set to the first pop and the current opperand 
        

        oikay so how do we keep track of this because we need to have a variable that will hold the results for example -

        in our stack we have 2 and then 1
        we need to have our variable hold 2

        then opperand 

        **********************

        THIS IS AFTER WATCHING THE SOLUTION

        so i was on the right path with the stack right, but the key here is there will always be two 
         values in the stack but when youre finished it should only be one remainder 

         for example - if we have 2 then 1 it should stay in the same order, 
         2 - 1

         and not 1 - 2

         so we have to pop one time to get the second and then pop again to get the first

         so pop once and get 1 

         then pop again to get 2

         so b opperand a  

        then we push the result back into the stack 

        to save our result 

        then we continue to see more values and we add the next values to the stack and then the next opperand

        soo first get the charachters, if the charachters are anything but numbers then we have to see which one it is

        and act accodingly!

        */

        let stack = [];

        for (let i = 0; i < tokens.length; i++) {
            // so we have to check if the current token is onw of the opperand

            if ( tokens[i] === "+" ) { 

                let a = stack.pop();
                let b = stack.pop();

                let newVal = b + a;
                console.log(newVal)
                // after we combine it then we can place it back into the stack;
                stack.push(newVal);

            } else if ( tokens[i] === "-" ) {
                let a = stack.pop();
                let b = stack.pop();

                let newVal = b - a;

                stack.push(newVal);

            } else if ( tokens[i] === "*" ) {
                let a = stack.pop();
                let b = stack.pop();

                let newVal = b * a;

                stack.push(newVal);

            } else if ( tokens[i] === "/" ) {
                let a = stack.pop();
                let b = stack.pop();

                let newVal = b / a;

                stack.push(Math.trunc(newVal) );
                
            } else  { // else the token is not an opperand and its a value we push it into our stack
                stack.push(Number(tokens[i]));
            }
        }

        return Math.floor(stack[0])
    }
}













