import {config, updateName } from './core/config.js'
import { say, answer } from './api/log.js'
import readline from 'readline';
import chalk from 'chalk';

say('Woof! 🐕')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recur = () => rl.question(chalk.blue(`${config.name} Waiting your command :\n`), command => {
  command = command.trim()
  switch (true) {
    // Reads
    case command === 'config name':
      answer(config.name)
      break;
    case command === 'config age':
      answer(config.age)
      break;
    // Updates
    case /^config name \w/.test(command):
      const newName = command.replace('config name ', '')
      updateName(newName)
      break;
  }
  recur()
});
recur()