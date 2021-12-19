let getInput = require('./get-input.js');
let makeTemplate = require('./make-template.js');
const props = require('./../../data/props.json');

let args = process.argv.slice(2).map(Number);
makeTemplate(args[0], args[1]);
getInput(args[0], args[1], props.session);