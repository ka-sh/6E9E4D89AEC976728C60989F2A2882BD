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
        if(!this.isDefined(m1[0].length,m2.length)){
            return [];
        }
        let result = [];
        let rows = m1.length;
        let columns=m2[0].length;

        for(let i=0;i<rows;i+=1){
            let tmpRow=[];
            for(let j=0;j<columns;j+=1){
                tmpRow.push(this.calcDP(m1[i],this.getCol(m2,j)));    
            }
            result.push(tmpRow);
        }
        return result;
    }
    /**
     * Return cth column of the matrix m
     * @param {Array} m 2D array representing matrix
     * @param {Number} c column number to be returned 
     */
    getCol(m,c){
        let tmp =[];
        for(let i=0;i<m.length;i+=1){
            tmp.push(m[i][c]);
        }
        return tmp;
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