function part1(contents, _) {

    console.log('Answer to Part 1: '+contents.trim().split('').map(a => a == '(' ? 1 : -1).reduce((a, b) => a+b));

}

function part2(contents, _) {

    let floor = 0;
    contents = contents.trim();
    for(let i = 0; i < contents.length; i++) {
        let char = contents[i];
        floor += char == '(' ? 1 : -1;
        if(floor == -1) {
            console.log('Answer to Part 2: '+(i + 1));
            break;
        }
    }

}

module.exports = { part1, part2 };