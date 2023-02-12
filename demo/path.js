const path = require("path");
const chalk = require("chalk");
console.log(chalk.blue("File Name"), path.basename(__filename));
console.log(chalk.red("Dir Name"), path.dirname(__dirname));
// all info
console.log(chalk.yellow("Parse"), path.parse(__filename));