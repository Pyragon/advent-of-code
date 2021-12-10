const PowerSet = require('js-combinatorics').PowerSet;

function part1(contents, split) {
    let it = new PowerSet(split.map(Number));
    console.log('Answer to part 1: ' + it.toArray().filter(x => x.length > 1 && x.reduce((a, b) => a + b) == 150).length);
}

function part2(contents, split) {
    let it = new PowerSet(split.map(Number));
    let arr = it.toArray();
    let shortestLength = arr.filter(x => x.length > 1 && x.reduce((a, b) => a + b) == 150)
        .reduce((a, b) => a.length < b.length ? a : b).length;
    console.log('shortestLength: ' + shortestLength);
    console.log('Answer to part 2: ' + arr.filter(x => x.length == shortestLength && x.reduce((a, b) => a + b) == 150).length);
}

module.exports = { part1, part2 };