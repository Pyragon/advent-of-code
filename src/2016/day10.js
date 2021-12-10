function part1(contents, split) {
    let instructions = split;
    let position = 0;
    let output = [];
    let input = [];
    let bots = [];
    let tries = 0;
    let part1Found = false;
    while (!instructions.every(e => e === null)) {
        for (let i = 0; i < bots.length; i++) {
            let bot = bots[i];
            if (!bot) continue;
            if (bot.values.includes(61) && bot.values.includes(17)) {
                if (!part1Found)
                    console.log('Answer to part 1: ' + i);
                part1Found = true;
            }
        }
        if (position >= instructions.length) {
            position = 0;
        }
        let index = position++;
        let instruction = instructions[index];
        if (instruction == null) continue;
        if (instruction.startsWith('value')) {
            let regex = /value (\d+) goes to bot (\d+)/;
            let match = regex.exec(instruction);
            let value = parseInt(match[1]);
            let bot = parseInt(match[2]);
            if (!bots[bot]) {
                bots[bot] = {
                    values: [value],
                };
            } else {
                bots[bot].values.push(value);
            }
            instructions[index] = null;
        } else {
            let regex = /bot (\d+) gives low to (\w+) (\d+) and high to (\w+) (\d+)/;
            let match = regex.exec(instruction);
            let bot = parseInt(match[1]);
            let first = match[2];
            let second = match[4];
            let firstValue = parseInt(match[3]);
            let secondValue = parseInt(match[5]);
            if (!bots[bot] || bots[bot].values.length < 2)
                continue;
            let low = Math.min(...bots[bot].values);
            let high = Math.max(...bots[bot].values);
            if (first == 'output')
                output[firstValue] = low;
            else {
                if (!bots[firstValue]) {
                    bots[firstValue] = {
                        values: [low],
                    };
                } else {
                    bots[firstValue].values.push(low);
                }
            }
            if (second == 'output')
                output[secondValue] = high;
            else {
                if (!bots[secondValue]) {
                    bots[secondValue] = {
                        values: [high],
                    };
                } else {
                    bots[secondValue].values.push(high);
                }
            }
            bots[bot].values = [];
            instructions[index] = null;
        }
    }
    console.log('Answer to part 2: ' + output[0] * output[1] * output[2]);
}

function part2(contents, split) {

}

module.exports = { part1, part2 };