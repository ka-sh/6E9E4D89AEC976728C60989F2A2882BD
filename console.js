const rl = require('readline');

class Console {
  constructor() {
    rl.createInterface(
      {
        input: process.stdin,
        output: process.output,
      },
    );
  }

  // eslint-disable-next-line class-methods-use-this
  ask(msg, validation) {
    return new Promise((resolve, reject) => {
      rl.question(msg, (ans) => {
        if (validation(ans)) {
          resolve(ans);
        } else {
          reject(ans);
        }
      });
    });
  }
}
const c = new Console();
module.exports = c;
