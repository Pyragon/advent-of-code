function part1(contents, split) {
    let nice = 0;
    let bad = ['ab', 'cd', 'pq', 'xy'];
    l: for (let line of split) {
        let two = false;
        for (let i = 0; i < line.length - 1; i++) {
            let char = line[i];
            let char2 = line[i + 1];
            for (let b of bad)
                if (char + char2 == b)
                    continue l;
            if (char == char2)
                two = true;
        }
        //check if line contains at least 3 vowels
        let vowels = 0;
        for (let char of line) {
            if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u')
                vowels++;
        }
        if (vowels < 3) continue;
        if (!two) continue;
        nice++;
    }
    console.log('Answer to part 1: ' + nice);
}

function part2(contents, split) {

}

module.exports = { part1, part2 };