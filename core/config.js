import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import fs from 'fs';
export const config = require('./config.json');

export const update = (keyName, payload) => {
  config[keyName] = payload
  return fs.promises.writeFile('./core/config.json', JSON.stringify(config))
}