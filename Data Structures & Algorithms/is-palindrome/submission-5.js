class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {


        /* 
        
        to solve this we must check if it reads forwards and backwards the same! and if any lowercase or uppercase interferes with backwards or forwards

        in order to do this in one swoop 


        we can use 2 pointers and start from front to back and check if they are the same

        once the right pointer is greater or = to the other one we can stop and return true if not return false
        
        */

        if ( s.length === 1 ) return true;

        let left = 0
        let right = s.length - 1;

        for (let i = 0; i < s.length; i ++) {
            // here we check if they are not the same
            let validLeft = /^[a-zA-Z0-9]+$/.test(s[left])
            let validRight = /^[a-zA-Z0-9]+$/.test(s[right])
            if ( validLeft && validRight ) {
                if ( s[left].toLowerCase() !== s[right].toLowerCase() ){
                    return false
                }
                left++
                right--;
            }

            if ( !validLeft ) left++;
            if ( !validRight ) right--;

            if ( left >= right ) return true;
        }
        return true;
    }
}
