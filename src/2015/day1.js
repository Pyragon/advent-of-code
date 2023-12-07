function part1(contents, split) {
    let floor = 0;
    for (let c of contents.split('')) {
        if (c === '(') {
            floor++;
        } else if (c === ')') {
            floor--;
        }
    }
    console.log('Answer to part 1: ' + floor);
}

function part2(contents, split) {
    let floor = 0;
    contents = contents.split('');
    for (let i = 0; i < contents.length; i++) {
        let content = contents[i];
        if (content == '(')
            floor++;
        else if (content == ')')
            floor--;
        if (floor == -1) {
            console.log('Answer to part 2: ' + (i + 1));
            break;
        }
    }
}

module.exports = { part1, part2 };