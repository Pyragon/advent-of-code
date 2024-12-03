function part1(contents, split) {
    contents = split.join('');
    let results = 0;
    for (let i = 0; i < contents.length; i++) {
        let char = contents[i];
        if (char != 'm') continue;
        let mul = contents.slice(i, i + 3);
        if (mul != 'mul') continue;
        let regex = /^mul\((\d+),(\d+)\)/;
        let match = contents.slice(i).match(regex);
        if (match) {
            let num1 = parseInt(match[1]);
            let num2 = parseInt(match[2]);
            let result = num1 * num2;
            results += result;
        }
    }
    console.log('Part 1:', results);
}

function part2(contents, split) {
    contents = split.join('');
    let results = 0;
    let disabled = false;
    for (let i = 0; i < contents.length; i++) {
        let char = contents[i];
        if (char != 'm' && char != 'd') continue;
        if (char == 'd') {
            let dis = contents.slice(i, i + 7);
            let doRegex = /^do\(\)/;
            let dontRegex = /^don\'t\(\)/;
            let matched = dis.match(doRegex);
            if (matched) {
                disabled = false;
                continue;
            }
            matched = dis.match(dontRegex);
            if (matched) {
                disabled = true;
                continue;
            }
        }
        if (disabled) continue;
        let mul = contents.slice(i, i + 3);
        if (mul != 'mul') continue;
        let regex = /^mul\((\d+),(\d+)\)/;
        let match = contents.slice(i).match(regex);
        if (match) {
            let num1 = parseInt(match[1]);
            let num2 = parseInt(match[2]);
            let result = num1 * num2;
            results += result;
        }
    }
    console.log('Part 2:', results);
}

module.exports = { part1, part2 };