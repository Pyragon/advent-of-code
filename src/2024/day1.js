function part1(contents, split) {
    let first = [];
    let second = [];
    for (let line of split) {
        let lineSplit = line.split("   ");
        first.push(parseInt(lineSplit[0]));
        second.push(parseInt(lineSplit[1]));
    }
    first.sort((a, b) => a - b);
    second.sort((a, b) => a - b);
    let total = 0;
    for (let i = 0; i < first.length; i++)
        total += Math.abs(first[i] - second[i]);
    console.log('Part 1:', total);
}

function part2(contents, split) {
    let first = [];
    let second = [];
    for (let line of split) {
        let lineSplit = line.split("   ");
        first.push(parseInt(lineSplit[0]));
        second.push(parseInt(lineSplit[1]));
    }
    let total = 0;
    for (let i = 0; i < first.length; i++) {
        let times = 0;
        for (let j = 0; j < second.length; j++) {
            if (first[i] === second[j]) {
                times++;
            }
        }
        total += first[i] * times;
    }
    console.log('Part 2:', total);
}

module.exports = { part1, part2 };