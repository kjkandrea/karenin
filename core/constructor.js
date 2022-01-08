import { createRequire } from "module";
const require = createRequire(import.meta.url);
const profile = require("../config.json");

export default class Karenin {
  constructor () {
    this.config = profile
  }
}