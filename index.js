let generator = require('./generator');
let userArgs = process.argv.slice(2);
let projectName = userArgs[1];
let projectType = userArgs[0];

generator.generate(projectName, projectType);

