module.exports = {

  run(contents, split) {
    console.log('Part 1: '+split.reduce((a, b) => parseInt(a)+parseInt(b)));
    let duplicates = [];
    let index = 0;
    let frequency = 0;
    while(true) {
      let value = parseInt(split[index++]);
      frequency += value;
      if(duplicates.indexOf(frequency) != -1) {
        console.log('Part 2: '+frequency);
        break;
      }
      duplicates.push(frequency);
      if(index == split.length) index = 0;
    }
  }

};
