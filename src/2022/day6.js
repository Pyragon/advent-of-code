function part1(contents) {
    let index = 0;
    wLoop: while (index < contents.length) {
        let chars = [contents[index], contents[index + 1], contents[index + 2], contents[index + 3]];
        let seen = [];
        index++;
        for (let char of chars) {
            if (seen.includes(char))
                continue wLoop;
            seen.push(char);
        }
        console.log('Answer to part 1: ' + (index + 3));
        break;
    }
}

function part2(contents) {
    let index = 0;
    wLoop: while (index < contents.length) {
        let chars = [];
        for (let i = 0; i < 14; i++)
            chars.push(contents[index + i]);
        let seen = [];
        index++;
        for (let char of chars) {
            if (seen.includes(char))
                continue wLoop;
            seen.push(char);
        }
        console.log('Answer to part 2: ' + (index + 13));
        break;
    }
}

module.exports = { part1, part2 };