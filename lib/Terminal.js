const readline = require('readline');
const utils = require('../utils');
class Terminal {
 
  displayHelp(){
    console.log(`
    *****************************************************
    ********************MATRIX MULTIPLIER****************
    *****************************************************
    >> Purpose of this tool is to perform Matrix multiplicaiton
    >> Please note that in order for the operatoin to be successfull
    >> The following rule MUST be true:
    >> Assuming I is the number of Rows, and J is the number of columns
    >> Then the operation is defined only and only if:
    >> J Of M1 == I of M2
    >>
    >> Operations:
    >> 
    >> M to multiply matrices.
    >> Q to quit.
    >>`);  
  }
  displayInvalidChoice(){
    console.log(
      `
      >>>> Invalid option!
      `
    ); 
  }
  displayInvalidValue(){
    console.log(`
    >>>> Invalid values!
    `);
  }
  async getMatrix(rows,columns){
    for(let r=0;r<rows;r+=1){

    }

  }
  async getRow(r){
    let rows = await this.ask(`
    Please enter row values for row no ${r} in the form of [v1,v2,v3,...vn]:
    `,[(ans)=>{
      try{
        let tmpRow = JSON.parse(ans);
        let tmpRow = ans.map((v)=>if(utils.isNum(v)){
          return v;
        }else{
          throw new Error('Invalid !');
        });
      }catch(ex){
        this.displayInvalidValue();
        this.getRow();
      }
    }]);
  }
  async getDimension(){
    try{
      let dimension = await this.ask(`
      Please Enter Matrix Dimension on the form of :[i,j]
      `,[
        (ans)=>{
          try{
            let tmpD = JSON.parse(ans);
            return utils.isDef(tmpD)&&
            Array.isArray(tmpD)&&
            tmpD.length===2&&
            utils.isPos(tmpD[0])&&
            utils.isPos(tmpD[1]);
          }catch(ex){
            return false;
          }
        }
      ]);
      return dimension;
    }catch(ex){
      this.displayInvalidValue();
      this.getDimension();
    }
    
  }
  /**
   * 
   * @param {String} msg Message to print for the user 
   * @param {Array[Function]} validations array of validators to validate user input 
   */
  ask(msg, validations) {
    this.initRl();
    return new Promise((resolve, reject) => {
      this.rl.question(msg, (ans) => {
        for(let i=0;i<validations.length;i+=1){
          if(!validations[0](ans)){
            reject(ans);
          }
        }
        resolve(ans);
        this.rl.close();
      });
    });
  }
  
  initRl(){
    this.rl=readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }
}
const t = new Terminal();
module.exports = t;
