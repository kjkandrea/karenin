import Karenin from './core/constructor.js'
import { say, answer } from './api/log.js'
import readline from 'readline';

const { config } = new Karenin()

say('Woof! 🐕')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recur = () => rl.question('Wating your command :\n', command => {
  switch (command) {
    case 'config name':
      answer(config.name)
      break;
    case 'config age':
      answer(config.age)
      break;
  }
  recur()
});
recur()