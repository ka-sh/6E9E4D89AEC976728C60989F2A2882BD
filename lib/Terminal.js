const readline = require('readline');

class Terminal {
 
  
  ask(msg, validation) {
    this.initRl();
    return new Promise((resolve, reject) => {
      this.rl.question(msg, (ans) => {
        if (validation(ans)) {
          resolve(ans);
        } else {
          reject(ans);
        }
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
