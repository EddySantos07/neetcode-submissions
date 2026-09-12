class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        /* 
        
        here we have to check if the string is the same backwards and forwards

        but we have to ignore spaces if we have a space we can ignore it right now i have 2 solutions

        1 with just moving 2 pointers both at the same rate and if they are the same chars

        and if they then reach a white space move both pointers till they are chars again

        if they are both chars again then keep matching them up till they both cross pointers so 1 is to 1 

        pointer 1 left is going to be greater than or = to pointer 2 

        and when they meet at a white space they will just be deleted at one pointer or another till cha
        
        */

        // for our edge case we can check if s is 1 or less
        if ( s.length <= 1 ) return true;

        let p1 = 0;
        let p2 = s.length - 1;

        while ( p1 < p2 ) {

            // we also have to check when to stop the pointers

            // if they are at a white space we have to move till not

            while (  p1 < p2 && !this.alphaNum(s[p1]) ) p1++;
            while (  p2 > p1 && !this.alphaNum(s[p2]) ) p2 --;
            // now we have to have our pointer and see if they match
            
            console.log(s[p1], p1, "=== ",s[p2], p2)
            if ( s[p1].toLowerCase() !== s[p2].toLowerCase()  ) return false;

            // else we move the pointers by 1 and then check if they are on a white space
            p1++, p2--;
            
            // now they should be good;
        }

        

        return true;
    }

    alphaNum(c) {
            return (c >= 'A' && c <= 'Z' || 
                c >= 'a' && c <= 'z' || 
                c >= '0' && c <= '9');
        }
}
