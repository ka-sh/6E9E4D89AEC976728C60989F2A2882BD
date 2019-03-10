const Matrix = require('../lib/MatrixMath');
const assert = require('jest').expect;
describe(`Test Matrix Dimension validation`,()=>{
    it(`Should return true for valid dimensions`,()=>{
        let matrix= new Matrix();
        expect(matrix.isDefined(2,2)).toBeTruthy();
    });

    it(`Should return false for Invalid dimensions`,()=>{
        let matrix= new Matrix();
        expect(matrix.isDefined(3,2)).toBeFalsy();
    });
});

describe(`Test Matrix dot product`,()=>{
    it(`Dot product should equal 13`,()=>{
        let m1Row = [2,3,1];
        let m2Col = [1,3,2];
        let matrix = new Matrix();
        expect(matrix.calcDP(m1Row,m2Col)).toEqual(13);
    });
    it(`Should return Matrix columns`,()=>{
        let m=[[1,2],[3,4]];
        let matrix = new Matrix();
        expect(matrix.getCol(m,1)).toEqual([2,4]);
    });
});

describe(`Test Matrix Multiplication on square Matrix`,()=>{
    it(`Should Multiply 2X2 matrix successfully`,()=>{
        let m1=[[1,2],[3,5]];
        let m2 = [[2,1],[4,4]];
        let mm = new Matrix();
        let result = mm.multiply(m1,m2);
        expect(result).toEqual([[10,9],[26,23]]);
    });

    it(`Should Multiply 3X3 matrix successfully`,()=>{
        let m1=[[1,2,1],[3,5,0],[2,4,1]];
        let m2 = [[2,1,0],[4,4,1],[3,3,0]];
        let mm = new Matrix();
        let result = mm.multiply(m1,m2);
        expect(result).toEqual([[13,12,2],[26,23,5],[23,21,4]]);
    });

    it(`Should return empty Array on undefined operation`,()=>{
        let m1=[[1],[2],[3]];
        let m2 =[[1,2],[2,2]];
        let result = new Matrix().multiply(m1,m2);
        expect(result.length).toEqual(0);
    });
    
    it(`Should successfully multiple 3X1 Matrix with 1X3`,()=>{
        let m1=[[3],[2],[1]];
        let m2=[[4,5,1]];
        let result = new Matrix().multiply(m1,m2);
        expect(result).toEqual([[12,15,3],[8,10,2],[4,5,1]]);
    });
});