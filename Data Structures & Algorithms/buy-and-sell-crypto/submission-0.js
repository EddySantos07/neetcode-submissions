class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        /* 

            thinking of the soliution for this

            so what im thinking is finding our largest and smallest day

            we can go through our prices finding our smallest for example

            our smallest would be ex 1 and then our highest would be 7 but it has to be in front of our 1

            in order to acheieve this in n time

            we have to start at 0 right indx
            
            our num will be the first smallest so our first num is the smallest
            then when we look through the next elements if its smaller than our 

            okay we have to have 2 things 

            we have to check the length of the prices right

            if we have more time we can be like okay our first element will be our starting point right
            our staring point is our lowest buy 

            if we have more prices then we can set our lowest price set

            if something is lower than we can set lowest price to that instead 

            if we have more prices than we can be like okay the next price if its bigger than we can put that as oour potential sell

            if we keep going and our potential sell has a bigger one than the current one we keep updating it.

            now if we have something much lower we can buy we calculate the profit of the one we do have and save then repeat the process
        
        */

        let buy = prices[0]; 
        let sell = 0;

        let profit = 0;

        // now we go through our pricess

        for (let i = 1; i < prices.length; i++) {
            // now we have to see if our curr ele is a better buy than current buy
            // if our ele is smaller than our buy calculate profit and redo buy and sell

            if ( prices[i] > sell ) sell = prices[i]; // check to see if current price is good for selling

            if ( prices[i] < buy ) { // restarts buy and sell to see if theres more profit available
                if ( ( sell - buy ) > profit ) profit = sell - buy; // if we find a better buy we have to check if we had any other calculations and if this profit currenctly is bigger than last

                buy = prices[i];
                sell = 0;
                continue;
            }
        }

        profit = (sell - buy) > profit ? (sell - buy) : profit;

        return profit;
    }
}
