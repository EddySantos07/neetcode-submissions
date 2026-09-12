class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        /* 

            an open bracket has to have a closed bracket

            and the open bracket must contain the closed bracket but they have to be in the correct ortder

            for ex -"[(])"

            if this one is not the correct how can we tell?

            well first off the open bracket - [

                needs its closed bracket right

                okay so we go looking for it

                ( this bracket is next meaning the close bracket for this one ]

                cant be the case next

                if it is its false

                so for the brute force solution it would be a double for

                if [ is the open 

                and the bracket has a closed bracket thats not the same or if it has a bracket that

                is an open then we have to have our counter to find a closed one thats the same

            but this is not optimal and more tedious

            how can we keep this simple and more effecient?

            we need a data strcuture and we can pick a data structure that will allow us to

            hold open brackets and then as soon as we find a closed one we have to match it to the last seen bracket

            soo for example - [(])

            if we find an open bracket aka - [

                then we save it to our dsa, our dsa would look like this - [

                    then we go through and find the next open or closed 

                    next - ( 
                    
                    so our dsa would look like this - [(

                    this shows we have open brackets in here only

                    and then when we get to ]

                    we compare it to what we seen last (

                    if this ] is not equal to / the opposite of this (

                        then we know its false
                    now if it is then we eliminate that certain bracket

                    this dsa sounds like we take only from the top and add to the top

                    aka a stack
        */

        // we also have to look out for edge cases 

        if ( s.length <= 1 ) return false;

        let openBracket = {
            "(": ")", 
            "[": "]",
            "{": "}"
        };

        let stack = [];

        for (let i = 0; i < s.length; i++) {
            // here we have to check if its an open or closed bracket

            // if its an open one we save it to our plate of stacks
            let bracket = s[i];

            if ( openBracket[bracket] !== undefined ) { // its an opening
                stack.push(bracket);
            } else if ( openBracket[ stack[stack.length - 1] ] === bracket ) { // else the bracket is undefined aka a closing one and we have to check the stack
                stack.pop()
            } else {
                return false;
            }

            // if its not we haev to check if we seen a opening plate in our stack
        }

        if ( stack.length >= 1 ) return false;

        return true;
    }
}
