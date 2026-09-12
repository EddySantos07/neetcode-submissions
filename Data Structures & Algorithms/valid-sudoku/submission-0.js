class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {

        /* 
        
        okay sooo i have an idea first off

        the first thought i have is to go from the x and y axis starting 
        from the top all the way to the bottom right

        so lets say we are at max y and then we do x + 1 y - 1

        this way and we check that level and column for duplicates 

        but this doesnt accoutn for the 3 x 3 sub boards 

        for the 3 x 3 sub boards we can move 3 levels forward and 1 level down every time 
        and put this in a set as well to see if its valid

        this takes care of the 9 rows and columns while effectivly

        and we take care of the 3 x 3

        soo okay look first we check the row starting from teh top right
        the row going to the right
        and then the column going going downwards 

        even if we see one thats not valid a row or column then we can return false

        first to our solution we need to start at the top

        so we have a loop for the row and a loop for the column

        loop checks row and checks if its valid by going through the elements 1 by 1 

        if we find a number that is already defined we return false

        if not then we go to check the column

        for the column we do the same method

        once we finish we move the for loop to the next one right we go down one a
        
        and the column moves with the row and column moves over 1 

        then we repeat the process till done

        how do we check columns we go top down,

        for example our loop for rowns will be the standard 

        for and then it will select the row 1 - n O n

        then we go through whcih is O ( N )

        for the column we have to have it in the row checker so

        after we check the row we do column in the for 

        we would do for ( the length of how many rows we have 

        and then to check the value in each row we can do a seperate variable

        so that variable will be called column and will have it always at i 

        for exmaple we start at 0 so column 0 and when we are at row 3 i = 2

        our column would be 2 meaning 3rd column 

        so this will indicate where we are in the column section 

        so 2 will be our column and form 2 we will do 0 we start at the top -

        columnSection[row][column]
        columnSection[0](starting place)[2](where we need to check column)
        the row would then incriment every time the loop runs
        so then it would be column[1] then [2] then [3]
        
        */

        let row = {};
        let column = {}; // these two will see if we have undefined or false

        for (let i = 0; i < board.length; i++) { // this just means that we have to go through the board the length of the board / column

            // so we go through each one but right now we are not going through any columns / row

            // we go through the row
            let curRow = board[i];

            for (let j = 0; j < curRow.length; j++ ) {
                // here we are in our first row and we have to check the row based off where we at in the board

                // check if the row is valid 1 - 9 no dupes

                let ele = curRow[j];

                if ( typeof Number(ele) === "number" && row[ele] ) {
                    // console.log( typeof Number(ele) === "number", row[ele], ele, row )
                    return false;
                } else if ( typeof Number(ele) === "number" && row[ele] === undefined && !isNaN(ele) ) {
                    
                    row[ele] = 1;
                } 
                // if ele is a num and defined we seen it already return false row is false board is not valid

                // if ele is a num and we havnt seen it add it to our row
            }
            // reset row
            row = {};

            console.log("passes all rows")

            // after checking the row we can do the column
            let curColumn = i; 
            let section = 0;

            for (let j = 0; j < board.length; j++ ) {
                // then we have to actualy go to the index of the column and go downward

                let ele = board[section][curColumn];

                if ( typeof Number(ele) === "number" && column[ele] ) {
                    return false;
                } else if ( typeof Number(ele) === "number" && column[ele] === undefined && !isNaN(ele)) {
                    column[ele] = 1;
                } 

                // after checking if the column section is valid we incriment our section to move downards

                section += 1;
            }
            // after this ends our section has to reset and column 
            column = {};
            section = 0;

            console.log("passes all columns")
        }

        

        // this is for the 9 x 9

        // now to do the 3 x 3

        let currentBox = 1;
        // so we have a box thats 1 and then we ultiply that until currentBox is 3 then we reset to get a new second and so forth row
        let currentRow = 1;

        for (let i = 0; i < board.length; i++) {
            // so for this we will move 3 3 and 3

            // this loop will be for our board length and 
            
            // and this loop will check the 3 x 3 boxes for one incriment of the primary loop
            // we will create a variable that will keep track of where we are

            let box = {};
            
            // next row is what you incriment when column reaches the end
            let nextRow = currentRow * 3 - 3
            
            // next column is incrimented till you reach right wall 
            let nextColumn = currentBox * 3 - 3; // this is the first of every box

            for ( let j = 0; j <= 8; j++ ) {
                // now we have to grab the current row and column

                let ele = board[nextRow][nextColumn];

                if ( typeof Number(ele) === "number" && box[ele]) {
                    return false;
                } else if ( typeof Number(ele) === "number" && box[ele] === undefined  && !isNaN(ele) ) {
                    box[ele] = 1;
                } 

                nextColumn++;
                
                if ( nextColumn > ( currentBox * 3 ) - 1  ) { // meaning if this is exceeding bound of the current box we redo and incriment next row
                    nextColumn = currentBox * 3 - 3;
                    nextRow++;
                }

                // if ( currentColumn <=  )
            }

            currentBox++;

            if ( currentBox > 3 ) {
                currentBox = 1;
                currentRow ++;
            }
        }

        return true;
    }
}
