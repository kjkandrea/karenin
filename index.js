import {config, update } from './core/config.js'
import { say, answer } from './api/log.js'
import readline from 'readline';
import chalk from 'chalk';
import open from './api/open.js'
import { google } from './const/url.js'

say('Woof! 🐕')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const recur = () => rl.question(chalk.blue(`${config.name} Waiting your command :\n`), async command => {
  command = command.trim()
  switch (true) {
    // Actions
    case command === 'open github':
      answer('Woof! 🐕')
      open(config.owner.github.url)
      break;
    case command === 'open google':
      answer('Woof! 🐕')
      open(google)
      break;
    // Reads
    case command === 'config name':
      answer(config.name)
      break;
    case command === 'config age':
      const createYear = Number(config.createDateYmd.substring(0, 4))
      const date = new Date()
      answer(createYear + 1 - date.getFullYear())
      break;
    // Updates
    case /^config name \w/.test(command):
      const name = config.name
      const newName = command.replace('config name ', '')
      try {
        await update('name', newName)
        answer(`Now ${name} name is ${newName}.`)
      } catch (err) {
        console.error(err)
      }
      break;
  }
  recur()
});
recur()