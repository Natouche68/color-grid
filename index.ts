import chalk from "chalk";

function formatColorCode(color: number): string {
	let colorCode = color.toString();

	if (colorCode.length === 1) {
		colorCode = `  ${colorCode}`;
	} else if (colorCode.length === 2) {
		colorCode = ` ${colorCode}`;
	}

	return colorCode;
}

function printColors(from: number, to: number, spaceInterval?: number): void {
	let s: string = "";
	let spacesCount: number = 0;

	for (let i = from; i <= to; i++) {
		s += chalk.bgAnsi256(i)(` ${formatColorCode(i)} `);

		if (spaceInterval) {
			spacesCount++;

			if (spacesCount == spaceInterval) {
				s += "  ";
				spacesCount = 0;
			}
		}
	}

	console.log(s);
}

printColors(0, 7);
printColors(8, 15);

console.log();

printColors(16, 33, 6);
printColors(52, 69, 6);
printColors(88, 105, 6);
printColors(124, 141, 6);
printColors(160, 177, 6);
printColors(196, 213, 6);

console.log();

printColors(34, 51, 6);
printColors(70, 87, 6);
printColors(106, 123, 6);
printColors(142, 159, 6);
printColors(178, 195, 6);
printColors(214, 231, 6);
