let generator = require('./generator');

let userArgs = process.argv.slice(2);
generator.generate(userArgs[0], userArgs[1]);

