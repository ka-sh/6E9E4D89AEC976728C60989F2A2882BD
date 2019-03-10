const utils = require('../utils');
class Matrix{
    
    /**
     * Matrix Multiplication is only defined if 
     * n of columns of Matrix1 == n of Rows of Matrix2
     * @param {number} j1 number of columns of first matrix. 
     * @param {number} i2 number of rows of the second matrix. 
     */
    isDefined(j1,i2){
        return utils.isNum(j1)&&utils.isNum(i2)&&j1===i2;
    }
    /**
     * Perform Matrix Multiplication
     * @param {} m1 
     * @param {*} m2 
     */
    multiply(m1,m2){

    }

    /**
     * Calculate dot product of the given arrays
     * @param {Array} row array representing M1 rows 
     * @param {Array} column array representing M2 column 
     */
    calcDP(row,column){
        let tmp=0;
        for(let i=0;i<row.length;i+=1)
        {tmp+=(row[i]*column[i])};
        return tmp;
    }
}
module.exports=Matrix;