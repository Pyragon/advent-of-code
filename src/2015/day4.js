const crypto = require('crypto');

function part1(contents, split) {
    let i = 0;
    while (true) {
        let md5 = crypto.createHash('md5').update(contents + i).digest('hex');
        if (md5.startsWith('00000'))
            break;
        i++;
    }
    console.log('Answer to part 1: ' + i);
}

function part2(contents, split) {
    let i = 0;
    while (true) {
        let md5 = crypto.createHash('md5').update(contents + i).digest('hex');
        if (md5.startsWith('000000'))
            break;
        i++;
    }
    console.log('Answer to part 2: ' + i);
}

module.exports = { part1, part2 };