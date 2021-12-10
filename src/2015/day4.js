let crypto = require('crypto');

function part1(contents, split) {
    console.log('Answer to part 1: ' + (findIndex(contents.trim(), 5) - 1));
}

function findIndex(secret, numZeros) {
    let index = 0;
    let hash;
    while (true) {
        let test = secret + (index++).toString();
        //convert to md5 hash
        hash = md5(test);
        if (hash.startsWith('0'.repeat(numZeros))) {
            break;
        }
    }
    return index;
}

function md5(str) {
    return crypto.createHash('md5').update(str).digest("hex");
}

function part2(contents, split) {
    console.log('Answer to part 2: ' + (findIndex(contents.trim(), 6) - 1));
}

module.exports = { part1, part2 };