const minimist = require('minimist');
const jest = require('jest');
const argv = process.argv.slice(2);
const argvM = minimist(process.argv.slice(2));

// watch unless on CI
if (!process.env.CI && !argvM.ci){
  argv.push('--watch');
}

jest.run(argv);
