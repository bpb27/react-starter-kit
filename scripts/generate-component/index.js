const fs = require('fs-extra');
const rl = require('readline');
const camelize = require('lodash.camelcase');
const upperFirst = require('lodash.upperfirst');
const fileText = require('./file-text');

const readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('enter the directory (e.g. src/pages)\n', (directory) => {
  readline.question('enter the component name in dash case (e.g. example-component)\n', (componentName) => {
    readline.close();
    generate({ componentName, directory });
  });
});

const generate = async ({ directory, componentName }) => {
  const directoryPath = (directory[directory.length - 1] === '/' ? directory.slice(0, -1) : directory);

  const names = {
    dashCase: componentName,
    titleCaseName: upperFirst(camelize(componentName)),
  };

  await fs.writeFile(`${directoryPath}/${componentName}.js`, fileText.component(names));
  await fs.writeFile(`${directoryPath}/${componentName}.test.js`, fileText.test(names));

  console.log('\nsuccess!'); // eslint-disable-line no-console
};
