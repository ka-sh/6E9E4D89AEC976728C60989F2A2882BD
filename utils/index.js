class Utils{
    isDef(v){
        return typeof v!=='undefined' && v!==null;
    }
    isNum(v){
        return this.isDef(v)&&
        !isNaN(parseFloat(v))&&
        isFinite(v);
    }
}
const util = new Utils();
module.exports = util;