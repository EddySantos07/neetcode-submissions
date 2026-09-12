class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        /* 

            thoughts - so we have to find the product of all elements except current i

            so bascialy a product of everything except 1 for each one

            if we could math it out

            we would use the division operator

            also what is a product? - the product is the answer when you multiply the nums together

            so for this to work for ex - 

            we need 1*2*6
            or 2*4*6 = 48 then 1*4*6 - 24

            like that but how do we solve for this?

            so lets think about this - 

            we can go through to the right and get the product of the first one 

            so one loop ----- that would answer 0

            then we could go backwards 

             ---- for loop backwards this would get us our result for the last one nums.length - 1

             so we have this result arr - [x _ _ _ _  x]

             all thats left is for is the middle section

             but when we go forward we are solvig for the first one
             but we are also passing the second and so forth

             oh oh!

             when we are going to the right we are solving for last
             and when we are going left we are solving for front right
             so if we go to the right  we can do

             see 1, then we see 2

            okay seeing the hints right 

            we go through the arr 

            and then we do like a shift soo okay 

            arr1 - [ 1, 2, 4, 6 ] 

            then - [ 6, 4, 2, 1 ]

            but if we do this then we have 

            for our 6*1= 6 
                2*4 = 8 * 6 = 48
                 4 * 2 = 8 * 48 = 384
                 1 * 6 = 6 * 384 = 2.3

            
            automaticaly this is wrong because we need one excuded we done exclude but lets do this

            what happens when we shift them?

            arr1 - [ 1, 2, 4, 6 ] 

               then - [ 6, 4, 2, 1 ]

            1 * 4 -  this is solving for the 2nd one so we skip 2 and go to 4 by over lapping
            - 4



                //// solve this by yourself now after understanding the solution

               to understand this we have to understadn that we can get the product of the last one by excluding the last one

               but by effectivly excluding the last one we can get the other ones not the product but almost the product 

               by just doing the multiplication by getting the multiple for the last one?

               for example - we get the multiplication of 1 2 4 this means we solved for the last one - 6

               then after we solved for that 1 * 1 = 1 

                then 2 * 1 = 2 
                then 4 * 2 = 8

                we have then set up the formula to then get the product for each one but how? okay look

                this is how it goes to get the last one you need to do all the index minus the last this is -

                8 right this is how it looks like - 

                [ 1, 1, 2, 8]  
                  ^        ^
                            for 8 we solved for the last one
                for the first one we have 1 because we multiply in revese when solving for this so we just do the answer * itself

                now for 1 and 2 these are the collective of the past multiplications
                for 1 we did 1 * 1 = 1
                and for 2 we did 1 * 2 = 2

                so 1 is the collective of all the past 
                and 2 is the collective of all the past 

                this means that in order to solve for them 

                we just go reverse look at this

                1, 2, 4, 6 now we have to start offf somewhere so we use 1 because we have to have our last first
                
                1 * 6 = 6

                now we have 6 as our starting point and we do 6 * 2 this effectivly solves for 4 in this case in 2's position its actualy 4 

                since okay look

                1 , 1, 2, 8
                        ^ 
                        is the collective of all the last but remeber 8 is also the collective of all the childs

                since we need to skip we do 6 * 2 meaning we did

                1 * 2 * 6 effectivly skippping 4

                it was 1 * 2 * 4 * 6 but we need to skip 4 soo 
                1 * 2 * 6 gives us our true answer now lets do this in code -

        */

        // we need our result - and remeber we need to have our place holder 1 to multiply the last one because we dont need to multiply the first
        let result = [1];

        // we also need our starting multiplier -
        let multiplier = 1;

        // now we need to collect all of collectives to get their products
        for (let i = 0; i < nums.length - 1; i++) {
            let num = nums[i]

            multiplier = multiplier * num;

            result.push(multiplier);
        }

        multiplier = 1;

        for (let i = nums.length - 1; i >= 1; i-- ) {
            let num = nums[i];
            
            multiplier = multiplier * num;

            result[i - 1] = result[i - 1] * multiplier;
        }

        return result;
    }
}
