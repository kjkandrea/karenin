import Karenin from './core/constructor.js'
import { say, answer } from './api/log.js'
import readline from 'readline';

const { config } = new Karenin()

say('Woof! 🐕')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Wating your command :\n', c => {
  answer(c)
  rl.close();
});