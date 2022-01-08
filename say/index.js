import chalk from 'chalk';

const log = text => console.log(chalk.cyan(text))

export const hello = () => log('Woof! 🐕')
