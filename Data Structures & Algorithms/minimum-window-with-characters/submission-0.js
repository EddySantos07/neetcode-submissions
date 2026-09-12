class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
       /* alright so here are my thoughts - 


        we have to find the shortest substring this could include with or without duplicate charachters 

        im thinkng a hashmap 
        we can place the amount of times we have seen t count timnes and the 

        when we do that we can then start our search on s 
        for example our hash would be 

        - xyz this is 1 : 1

        then go to s 

        O is not in our map so we move our pointer till we see a charachter in our map
        we go all the way down to z

        the first z
        and whennwe are there we plot our left window and then we keep track if there is another char in the next str
        so for example
        z then o, d, y we found another char 
        this is the length of the string now
        then we found x soi we found all 3 with the amount in it 1 : 1

        the length of the str is 5

        since thats the case we save that and then 

        we can start moving our left upwards to find another string but first we take out the 1 : 1 so we have 3 charachter 3 times we have to look for

        and then when we move our left pointer we have to make sure as long as 
        our count of charachters is still with the charachters that are in our map we move our pointer left till we dont have it anymore

        so for exaple - z moves to the next charachter thats where our new string is suppose to start
        
        if i start at the next char and its not a charachter in the map we will be gainning length and not loosing it

        so the formula is take t their count 

        then  go through s and if its a char in the map we add to our count
        and if not we move till we find the next 

        once the count is good we then delete and move left pointer till the window reaches the next char this will maximize our shortest length
        */

        /*

        if ( t.length > s.length ) return "";

        let seenCount = t.length;
        let seen = {};

        for (let i = 0; i < t.length; i++) {
            seen[t[i]] !== undefined ? seen[t[i]]++ : seen[t[i]] = 1;
        }
        
        // telling us how many times we seen our charachers and their frequency
        let count = 0;
        let currString = "";
        let result = s;

        let left = 0
        
        for (let i = 0; i < s.length; i++) {

            // okay so we have check if the curr char is a seen char and if its greater than 0 we add it to our left and then we decriment from seen
            
            let char = s[i];
            if ( seen[char] && seen[char] > 0 ) {
                // means we have more than 1 || 1
                count++
                seen[char]--;
                currString += char;
            } else if ( count > 0 ) {
                currString += char;
            }

            // here if 
            
            if ( count >= seenCount ) {
                console.log(count, left, i)
                
                while ( count > seenCount - 2 ) {// means we can stop the search and move our window we seen all the chars in the seen and when this happens we need to move our window
                // we delete and move the window and incriment
                    let char = s[left];
                
                    if ( seen[char] ) {
                        seen[char] ++;
                        count--;

                        currString = currString.slice(1, currString.length);
                    } else {
                        currString = currString.slice(1, currString.length);
                    }

                    left++;
                }

                count++;
                left --;
                seen[s[left]]--;
                
            }

            result = currString.length < result.length ? result = currString : result;
        }
  

        return result;

        */


            /* 
    RETRY 25 MINS

    thoughts - so first off the edge cases  when t is the same size or greater than s

    or when s is length 0 

    then we have to okay so what im thining is 

    we have 2 of maps that has a count but a count of what?
    first map wil;l take the count of t
    the second will be empty abnd will have to match t's count by keeping track if a  counter

    this counter will keep track of the necessary elements we need that matches s obj

    then we updated in the for loop based on what we seen
    */

    // edge cases - 

    // if s and t are the same length or if t is greater than s

    if ( t.length > s.length || t === "") return "";

    let seenT = {};
    let seenS = {};
    
    // we have our counts of each ele in t
    for (let i = 0; i < t.length; i++) {
        seenT[t[i]] === undefined ? seenT[t[i]] = 1 : seenT[t[i]]++;
    }

    //  we then have to go through our s and update our variables
    let countT = t.length;
    let count = 0;
    
    let left = 0;
    let result = [0, Infinity];

    for (let i = 0; i < s.length; i++) {
        // now we check if the current char is in seen t and if its less than t count 
        let currChar = s[i];

        seenS[currChar] !== undefined ? seenS[currChar]++ : seenS[currChar] = 1;
        
        if ( (seenS[currChar] !== undefined && seenT[currChar] !== undefined) && (seenS[currChar] <= seenT[currChar] ) ) { // meaning char is in seen t we have to update it
            
            count++;
        }

        while ( count === countT ) { // while there is more chars then needed or if we have the count we need, we delete em and update our result;
            // we grab our char 

            // update our length first 
            if ( (i - left + 1) < (result[1] - result[0] + 1) ) result = [left, i];

            // we now have to remove our char from seenS
            seenS[s[left]]--;

            // then we have to update the count if the char removed was in seenT
            if ( (seenS[s[left]] !== undefined && seenT[s[left]] !== undefined) && (seenS[s[left]] < seenT[s[left]] ) ) { // meaning char is in seen t we have to update it
                count--;
            }

            left++; // move left forward
        }
    }

    return result[1] === Infinity ? "" : s.slice(result[0], result[1] + 1);
    }

}









