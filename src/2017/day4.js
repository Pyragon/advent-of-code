const anagram = require('is-anagram');

function part1(contents, split) {
    let valid = 0;
    lineL: for (let line of split) {
        let seen = [];
        for (let word of line.split(' ')) {
            if (seen.includes(word))
                continue lineL;
            seen.push(word);
        }
        valid++;
    }
    console.log('Answer for part 1: ' + valid);
}

function part2(contents, split) {
    let valid = 0;
    lineL: for (let line of split) {
        let seen = [];
        for (let word of line.split(' ')) {
            if (isAnagram(seen, word))
                continue lineL;
            seen.push(word);
        }
        valid++;
    }
    console.log('Answer for part 2: ' + valid);
}

function isAnagram(seen, input) {
    for (let word of seen) {
        if (anagram(word, input))
            return true;
    }
    return false;
}

module.exports = { part1, part2 };