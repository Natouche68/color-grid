import chalk from "chalk";

for (let i = 0; i < 256; i++) {
	console.log(chalk.bgAnsi256(i)(i));
}
