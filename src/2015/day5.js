function part1(contents, split) {
    console.log(split.filter(a => !isNaughty(a.trim())).length);
}

function part2(contents, split) {

}

function isNaughty(line) {
    let vowels = 'aeiou'.split('');
    let vowelCount = 0;
    for(let char of line.split('')) {
        if(vowels.includes(char)) vowelCount++;
    }
    if(vowelCount < 3) return true;
    let twoInARow = false;
    for(let i = 0; i < line.length - 1; i++) {
        if(line[i] == line[i+1]) {
            twoInARow = true;
            break;
        }
    }
    if(!twoInARow) return true;
    let invalidStrings = ['ab', 'cd', 'pq', 'xy'];
    for(let invalid of invalidStrings) {
        if(line.includes(invalid)) return true;
    }
    return false;
}

module.exports = { part1, part2 };