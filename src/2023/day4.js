function part1(contents, split) {
    let total = 0;
    for (let card of split) {
        let [winningNumbers, numbers] = card.split(': ')[1].trim().split(' | ');
        numbers = numbers.split(' ').filter(x => x !== '').map(Number);
        winningNumbers = winningNumbers.split(' ').filter(x => x !== '').map(Number);
        let matches = numbers.filter(x => winningNumbers.includes(x)).length;
        if (matches > 0)
            total += 2 ** (matches - 1);
    }
    console.log('Answer to part 1:', total);

}

function part2(contents, split) {
    let counts = [];
    let matches = [];
    for (let i = 0; i < split.length; i++) {
        let card = split[i];
        let [numbers, winningNumbers] = card.split(': ')[1].trim().split(' | ');
        numbers = numbers.split(' ').filter(x => x !== '').map(Number);
        winningNumbers = winningNumbers.split(' ').filter(x => x !== '').map(Number);
        matches[i] = numbers.filter(x => winningNumbers.includes(x)).length;
        counts[i] = 1;
    }
    for (let i = 0; i < split.length; i++) {
        for (let j = 0; j < counts[i]; j++) {
            for (let k = 0; k < matches[i]; k++) {
                counts[i + 1 + k]++;
            }
        }
    }
    console.log('Answer to part 2:', counts.reduce((a, b) => a + b, 0));

}

module.exports = { part1, part2 };