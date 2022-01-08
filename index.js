import Karenin from './core/constructor.js'
import { hello } from './say/index.js'
import readline from 'readline';

const karenin = new Karenin()

console.log(karenin.config)

hello()

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Karenin? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});