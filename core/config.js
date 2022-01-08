import { createRequire } from "module";
const require = createRequire(import.meta.url);
export const config = require("./config.json");

export const updateName = newName => console.log('update %s', newName)