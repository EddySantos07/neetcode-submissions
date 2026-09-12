class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {

       /* 
       
       so what im thinking is that we need the position of the cars

       and then the speed, the speed lets say is added to the position of the car

       for ex - 4 + 2 position 4 and then the next is position 6 because its going at a speed of 6

       and when this reaches 10 car position 1 at speed 3 will bne behind it

       making this a car fleet of 1

       the whole thing is that we need to calculate how to get the new position/ update the positions 
       for example we need to do car position 4 + 3 till it reaches 10 or higher / the distance it will be and then we grab the smallest distance / 
       the smaller the distance the faster the car
       so if we have a car thats distance is 4 and a car thats distance 5

       the car thats distance 5 will block anyone thats behind it creating 1 fleet

       but if the car thats distance 4 is in front of the car thats distance 5 then the 4 willl be 1 fleet

       and the 5 will be 1 fleet a total of 2 fleets
        
       */ 

        // so we have to have our variables and place to store the result

        if ( position.length === 1 ) return 1

        let result = 0;

        let fleets = [];

        // stack to see how many fleets we have
        let stack = [];

        

        for (let i = 0; i < position.length; i++) {
            // now we go therough the positions and speed

            let currPosition = position[i];
            let currSpeed = speed[i];

            // now we must combine em and get the time to target

            // let timeToTarget = (target - currPosition) / currSpeed;
            
            // push the time to target to our fleet arr so we can begin to check whos where
            fleets.push([currPosition, currSpeed]);

            // fleets.push(timeToTarget);
        }

        fleets.sort((a,b) => b[0] - a[0]  );

        for (let i = 0; i < fleets.length; i++) {

            let currPosition = fleets[i][0];
            let currSpeed = fleets[i][1];

            // now we must combine em and get the time to target

            let timeToTarget = (target - currPosition) / currSpeed;
            fleets[i] = timeToTarget;
        }

        console.log(fleets)

        // now we check how many fleets we have
        // console.log(fleets)
        for (let i = 0; i < fleets.length; i++) {
            // now we have to see if the first car reaches there first

            // we have to see if the speed is smaller 

            // while our current speed is greater than the last car in the stack we pop and count
            let currCar = fleets[i];
            
            if ( currCar > stack[stack.length - 1] ) {
                stack.push(currCar);

            } else if ( stack.length === 0) {
                stack.push(currCar);
            }
        } 

        // now an edge case is if we have only one element we need to return it

        return stack.length;
    }
}
