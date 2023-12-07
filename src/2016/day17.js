let crypto = require('crypto');

function part1(contents, split) {

    contents = 'ihgpwlah';
    let grid = [];
    let doors = [];
    let path = [];
    let hash = md5(contents);
    let checked = [];
    let x = 0;
    let y = 0;
    let tries = 10;
    let i = 0;
    while (i++ < tries) {
        if (x == 4 && y == 4) break;
        checkRoom(x, y, checked, JSON.parse(JSON.stringify(path)), contents);
    }
    console.log('Answer to part 1: ' + path.join(''));
    console.log(md5(contents + 'D'));
}

function checkRoom(x, y, checked, path, contents) {
    console.log('Checking with path: ' + path.join(''));
    let hash = md5(contents + path.join(''));
    let doorDirs = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0]
    ];
    let doorChars = ['U', 'D', 'L', 'R'];
    for (let i = 0; i < 4; i++) {
        let dir = doorDirs[i];
        let newX = x + dir[0];
        let newY = y + dir[1];
        let key = newX + ',' + newY + ',' + path.join('');
        if (newX < 0 || newX > 3 || newY < 0 || newY > 3) continue;
        if (checked.indexOf(key) != -1) continue;
        if (hash.charAt(i) != 'b' && hash.charAt(i) != 'c' && hash.charAt(i) != 'd' && hash.charAt(i) != 'e' && hash.charAt(i) != 'f') {
            if (path.length == 1 && path[0] == 'D') {
                console.log('Door ' + doorChars[i] + ' closed because: ' + hash.charAt(i));
            }
        }
        checked.push(key);
        path.push(doorChars[i]);
        checkRoom(newX, newY, checked, JSON.parse(JSON.stringify(path)), contents);
    }
}

function md5(str) {
    return crypto.createHash('md5').update(str).digest('hex');
}

function part2(contents, split) {

}

module.exports = { part1, part2 };