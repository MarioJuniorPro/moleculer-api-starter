const fs = require("fs");
const getDependencies = () => {
  const file  = fs.readFileSync("package.json");
  const content = JSON.parse(file);
  const devDependencies = [];
  const dependencies = [];
  for (const devDep in content.devDependencies) {
    devDependencies.push(devDep);
  }
  for (const dep in content.dependencies) {
    dependencies.push(dep);
  }

  console.log(`
  ########## DEPENDENCIES

    npm i ${dependencies.join(' ')}

  `);

  console.log(`
  ########## DEV DEPENDENCIES

    npm i -D ${devDependencies.join(' ')}

  `);
};
if (require.main === module) {
  getDependencies();
} else {
  module.exports = getDependencies;
}
