// npm --version

// local dependency - use it only in this project
// npm i <packageName>

//global dependency - use it in any project
// npm install -g <packageName>
// sudo apt install -g <packageName>

//package.json - manifest file
// manual approach (create package.json in the root, create properties, etc)
// npm init 
// npm init -y (everything default)

// we installed lodash as a dependency and can import it here and use it's features
const _ = require('lodash');

// flatten deep is a lodash function 
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)