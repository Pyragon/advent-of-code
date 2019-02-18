const YEAR = 2018;
const DAY = 9;

const fs = require('fs');
const path = require('path');

let mod = path.join(__dirname, 'challenges', YEAR.toString(), DAY+'.js');
let input = path.join(__dirname, 'challenges', YEAR.toString(), 'inputs', DAY+'.txt');

if(!fs.existsSync(mod)) {
  console.error('Unable to locate file!');
  return false;
}
if(!fs.existsSync(input)) {
  console.error('Unable to locate input file!');
  return false;
}

mod = require(mod);
if(!mod.run) {
  console.error('Module does not contain a run method!');
  return;
}
fs.readFile(input, (error, contents) => {
  if(error) {
    console.error(error);
    return false;
  }
  var split = contents.toString().split('\r');
  split.splice(-1);
  mod.run(contents.toString(), split);
});
