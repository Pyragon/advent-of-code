function part1(contents, split) {
    let count = 0;
    for (let str of split) {
        if (str.includes('ab') || str.includes('cd') || str.includes('pq') || str.includes('xy'))
            continue;
        let doubleFound = false;
        for (let i = 1; i < str.length; i++) {
            if (str[i] == str[i - 1]) {
                doubleFound = true;
                break;
            }
        }
        if (!doubleFound) continue;
        let vowels = str.match(/[aeiou]/g);
        vowels = vowels ? vowels.length : 0;
        if (vowels < 3) continue;
        count++;
    }
    console.log('Answer to part 1: ' + count);
}

function part2(contents, split) {
    for (let line of split) {
        for (let i = 0; i < line.length - 2; i++) {
            if (line[i] == line[i + 2]) {
                console.log('Answer to part 2: ' + line);
                return;
            }
        }
    }
}

module.exports = { part1, part2 };