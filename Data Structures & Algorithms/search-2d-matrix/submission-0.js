class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {


        // for each item in the matrix we run a binary search

        for (let i = 0; i < matrix.length; i++) {
            let search = matrix[i];
            
            let right = search.length - 1; 
            let left = 0;

            while ( left <= right ) {
                let mid = Math.floor( ((right - left) / 2 ) + left );
                console.log(mid, search[mid])
                if ( search[mid] === target ) {
                    return true;
                } else if ( search[mid] > target ) {
                    right = mid - 1;
                } else if ( search[mid] < target ) {
                    left = mid + 1;
                }
            }
        }

        return false;
    }
}
