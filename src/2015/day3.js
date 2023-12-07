function part1(contents, split) {
    let x = 0;
    let y = 0;
    let seen = [];
    seen[x + ',' + y] = true;
    for (let content of contents.split('')) {
        if (content === '^') {
            y++;
        } else if (content === 'v') {
            y--;
        } else if (content === '>') {
            x++;
        } else if (content === '<') {
            x--;
        }
        seen[x + ',' + y] = true;
    }
    console.log('Answer to part 1: ' + Object.keys(seen).length);
}

function part2(contents, split) {
    let x = 0;
    let y = 0;
    let x2 = 0;
    let y2 = 0;
    let seen = [];
    seen[x + ',' + y] = true;
    for (let i = 0; i < contents.length; i++) {
        let content = contents[i];
        if (i % 2 == 0) {
            if (content == '^')
                y++;
            else if (content == 'v')
                y--;
            else if (content == '>')
                x++;
            else if (content == '<')
                x--;
            seen[x + ',' + y] = true;
        } else {
            if (content == '^')
                y2++;
            else if (content == 'v')
                y2--;
            else if (content == '>')
                x2++;
            else if (content == '<')
                x2--;
            seen[x2 + ',' + y2] = true;
        }
    }
    console.log('Answer to part 2: ' + Object.keys(seen).length);

}

module.exports = { part1, part2 };