class Utils{
    isDef(v){
        return typeof v!=='undefined' && v!==null;
    }
    isNum(v){
        return this.isDef(v)&&
        !isNaN(parseFloat(v))&&
        isFinite(v);
    }
    isPos(v){
        return this.isNum(v)&&v>0;
    }
}
const util = new Utils();
module.exports = util;