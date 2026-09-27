class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        // we can use division on eahc one of the numss beign o n time but theres another way to do it and thats the harder way

        // in order to solve it this way we need to need to go from left toi right its what i remeberr about this problkem

        /* 
        
        well we have to study  as to why, lets take 15 mins to try to anazlyze best we can.

        for example 1,2 ,4,6

        we pass 1 2 4

        and leave 6 out so we solve for 6

        then we go reverse 

        6 4 2 but not one so we solve for 1

        we have our results for 1,2,4 whci is - 

        1,2,8
        and - 6 24 48

        so  we gather our 3 from each side and our ends are done, that means the middle part is whats left

        and how does the middle part work and how can we solve this?>

        so lets line them up

        1,2,8 x
          6,24,48 x
        

        what im thinking about here 
        okay so 1x2 si 2 and 2 x 4 is 8 so  8  gets placed in the 6 place meaning we solved for 6 becausee everything but mulitplying ther 6 is is solution so 8

        6 = 8

        so whats 12? meaning we solve for 4

        so 1 x 2 x 6 = 12

        how?

        becaause we are shifting the numbers and solved numbers 

        getting our responses / answers

        so 6 wasnt touched so we can combine it with 1 and 2 moving it over to 4 and we can do that with 

        meaning -

          1,2,8 x
            6,24,48 x

            we have to skip 8

            we have to skip one so the 6 can touch the 2 

            so 1,2,4,6
                 6
                we keep skipping one to get the abnswers

                so 6 skips to 2

                6 and 4 skips to 1 

                like thattt

        so to explain it all - 

        we do eevrything but the back

        so for example we wana keep track of everything so lets do

        1x1 1 times what ever the first number is

        we wana keep track like this -  1, 2, 8 we dont do the 6

        then we keep track going backwards 
        6,24,48

        now that we have - 

        1,2,8
        6,24,48

        we want to skip because we kept track of everything

        that comes before that number when we go to the left to multiply so we can  get the answers that way

        so we dont wana do 6 to 1 becuase then we would be skipping 2 we want to skip 4 so we have to do

        6x2

        which is 12

        so we can plug 8 in so 

        48,24,12, 8

        so to solve this we need to gather the right first 

        then the last one will always be the answer to the last one

        */

        // let result = [];

        // let right = [];

        // let currNum = 1;

        // for (let i = 0; i < nums.length - 1; i++) {
        //     let num = nums[i];

        //     currNum = currNum * num;

        //     right.push(currNum);
        // }

        // currNum = 1; //reset;

        // for (let i = nums.length - 1; i >= 1; i --) {
        //     currNum = currNum * nums[i];

        //     if (right[i - 2]) {
        //         result.push(currNum * right[i - 2]);
        //     } else {
        //         result.push(currNum);
        //     }

        // }
        
        // result.reverse();
        
        // result.push(right[right.length - 1]);
        
        // return result


        // redo because i had to ask chat

        let right = [];

        let base = 1;

        for (let i = 0; i < nums.length - 1; i++) {
            let num = nums[i];

            base = base * num;

            right.push(base);
        }

        // reset base, 
        base = nums[nums.length - 1] // heres the thing since we are already startuing from the back the base needs to be the back so nums[back of nums since we calculting that]

        let result = [];

        let rightIndx = right.length - 2;

        result.push(right[right.length - 1]);
        // here we have to manage the base, nums

        for (let i = nums.length - 2; i >= 1; i--) {

          let num = nums[i];

          let product = base * right[rightIndx];

          result.push(product);

          base = base * nums[i];
          rightIndx--;
        }
        result.push(base);

        return result.reverse();
    }
}
