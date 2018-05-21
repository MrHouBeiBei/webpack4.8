
const log = console.log;
console.log(log)

/**
 * chalk 颜色的插件
 */
const chalk = require('chalk');
console.log(chalk.blue('Hello world!'));
console.log(chalk.green('Hello world!'));
log(chalk.red('Hello world!'));
log(chalk.yellow('Hello world!'));
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

// ES2015 template literal 
log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Use RGB colors in terminal emulators that support it. 
log(chalk.keyword('orange')('Yay for orange colored text!'));
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));
// console.log(6)