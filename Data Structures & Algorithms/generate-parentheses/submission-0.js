class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
  /* 
        
        so we are given n and this means that we have to make pairs with these parenthasis

        how do we generate pairs / valid pairs with the parenthesis?

        there is a pattern where we have to have an open and then a close but how is that possible?

        ////////////////// AFTER REVIEWING THE SOLUTION AND PLAYING AROUND WITH THE RECURSION TREE / THE WAYS THE 
        BACKTRACKING WORKS AND HOW AND WHY!

        so this is the solution after seeing and wonedering and studyinghow backtracking works!

        we need to have a recursive function this function will take in the parameters and

        then it will be updated in our branches of seperation when they are recursivley called
        
        each if statment i believe is pruning and each if is a branch left or right 
        */

        // the first thing we need is to haev our variables our result where we will store our recursive answers

        let  result = [];

        // now we need to build out our recursive function

        // what dopes the function take?
        // it takes a 
        function parenthesis ( openA, closingA, stack ) {


            // for edge cases say we the inputs -1 we need to account for that just incase so we can add when we need to return everything
            if ( openA === n && closingA === n ) { // if our opening and our closing is to n we need to push and return
                result.push(stack.join('')) // what are we pushing? we need to push what ever we built to our result
                return;
            }

            // we need to check if we have seen 3  open and 3 closed parenthesis meaning n parenthesis n open and n closed

            // since we are doing it in order we need ot have open first and then check if we have any opens before closing

            if ( openA < n ) { // if we have enough open we stop
                // if we have less than what we need we can keep recursing and adding an open parenthesis
                stack.push("(")
                parenthesis( openA + 1, closingA, stack);
                stack.pop()
            }

            // if we put an else we dont seperate branches we will return and then finish or it will just follow a different path
            // on the same tree branch but it will just be one way

            // thats why we need 2 if statements

            // now this if statement is the closing one and we have to check if the closing oen is less than  the opening one
            if ( closingA < openA ) { // if we have less than the opening we can now add a closing
                // we recurse and we add one more closing 
                stack.push(")")
                parenthesis( openA, closingA + 1, stack );
                stack.pop()
            }
        }

        parenthesis(0,0,[]);
        
        return result;
    }
}
