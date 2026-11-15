const md5 = require('md5');

function part1(contents, split) {
    let ans = 0;
    let part1 = false;
    contents = contents.trim();
    while(true) {
        let hash = md5(contents+''+(++ans));
        if(hash.startsWith('00000') && !part1) {
            console.log('Answer to Part 1: '+ans);
            part1 = true;
        }
        if(hash.startsWith('000000')) {
            console.log('Answer to Part 2: '+ans);
            break;
        }
    }
}

function part2(contents, split) {

}

module.exports = { part1, part2 };