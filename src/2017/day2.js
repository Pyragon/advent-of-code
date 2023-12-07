function part1(contents, split) {
    let count = 0;
    for (let line of split) {
        let numbers = line.split(/\s+/).map(Number);
        let min = Math.min(...numbers);
        let max = Math.max(...numbers);
        count += max - min;
    }
    console.log('Answer to part 1: ' + count);
}

function part2(contents, split) {
    let count = 0;
    for (let line of split) {
        let numbers = line.split(/\s+/).map(Number);
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length; j++) {
                if (i !== j && numbers[i] % numbers[j] === 0) {
                    count += numbers[i] / numbers[j];
                }
            }
        }

    }
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };