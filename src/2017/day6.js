function part1(contents, split) {
    let bank = contents.split('\t').map(Number);
    let seen = [];
    let cycles = 0;
    while (seen.indexOf(bank.join(',')) === -1) {
        seen.push(bank.join(','));
        let max = Math.max(...bank);
        let index = bank.indexOf(max);
        bank[index] = 0;
        while (max > 0) {
            index = (index + 1) % bank.length;
            bank[index]++;
            max--;
        }
        cycles++;
    }
    console.log('Answer to part 1: ' + cycles);
}

function part2(contents, split) {
    let bank = contents.split('\t').map(Number);
    let seen = [];
    let cycles = 0;
    while (seen.indexOf(bank.join(',')) === -1) {
        seen.push(bank.join(','));
        let max = Math.max(...bank);
        let index = bank.indexOf(max);
        bank[index] = 0;
        while (max > 0) {
            index = (index + 1) % bank.length;
            bank[index]++;
            max--;
        }
        cycles++;
    }
    console.log('Answer to part 2: ' + (cycles - seen.indexOf(bank.join(','))));
}

module.exports = { part1, part2 };