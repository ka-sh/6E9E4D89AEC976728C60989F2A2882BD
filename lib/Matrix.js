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
}
module.exports=Matrix;