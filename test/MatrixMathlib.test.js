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
});