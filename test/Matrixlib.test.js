const Matrix = require('../lib/Matrix');
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