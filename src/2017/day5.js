function part1(contents, split) {
    let index = 0;
    let steps = 0;
    let instructions = split.map(Number);
    while (true) {
        steps++;
        index += instructions[index]++;
        if (index < 0 || index >= instructions.length) {
            console.log('Answer for part 1: ' + steps);
            return;
        }
    }
}

function part2(contents, split) {
    let index = 0;
    let steps = 0;
    let instructions = split.map(Number);
    while (true) {
        steps++;
        let offset = instructions[index];
        if (offset >= 3)
            instructions[index]--;
        else
            instructions[index]++;
        index += offset;
        if (index < 0 || index >= instructions.length) {
            console.log('Answer for part 2: ' + steps);
            return;
        }
    }
}

module.exports = { part1, part2 };