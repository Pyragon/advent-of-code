function part1(_, split) {
    let monkeys = parseInput(split);
    let count = 0;
    let inspects = [];
    while (count++ < 20) {
        for (let monkey of Object.keys(monkeys)) {
            let { items, operation, true: trueTarget, false: falseTarget, test } = monkeys[monkey];
            while (items.length > 0) {
                let item = items.shift();
                let op = operation.replaceAll('old', item);
                let newValue = eval(op);
                newValue = Math.floor(newValue / 3);
                let target = newValue % test == 0 ? trueTarget : falseTarget;
                monkeys[target].items.push(newValue);
                if (!inspects[monkey])
                    inspects[monkey] = 0;
                inspects[monkey]++;
            }
        }
    }
    //sort inspects by values, multiply two highest together
    let answer = inspects.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b);
    console.log('Answer to part 1: ' + answer);
}

//this is one is annoying, but if you modulo by the product of all the tests, the result should stay the same and not affect anything
//but will allow the operations to be done on the numbers without getting to big
function part2(_, split) {
    let monkeys = parseInput(split);
    let count = 0;
    let inspects = [];
    let constant = 1;
    for (let monkey of Object.values(monkeys))
        constant *= monkey.test;
    while (count++ < 10000) {
        for (let monkey of Object.keys(monkeys)) {
            let { items, operation, true: trueTarget, false: falseTarget, test } = monkeys[monkey];
            while (items.length > 0) {
                let item = items.shift();
                let op = operation.replaceAll('old', item);
                let newValue = eval(op) % constant;
                let target = newValue % test == 0 ? trueTarget : falseTarget;
                monkeys[target].items.push(newValue);
                if (!inspects[monkey])
                    inspects[monkey] = 0;
                inspects[monkey]++;
            }
        }
    }
    //sort inspects by values, multiply two highest together
    let answer = inspects.sort((a, b) => b - a).slice(0, 2).reduce((a, b) => a * b);
    console.log('Answer to part 2: ' + answer);
}

function parseInput(split) {
    let monkeys = {};
    let monkey = 0;
    for (let line of split) {
        line = line.trim().toLowerCase();
        let match;
        if ((match = line.match(/monkey (\d+):/))) {
            monkey = parseInt(match[1]);
            monkeys[monkey] = {};
        } else if ((match = line.match(/starting items: (.*)/)))
            monkeys[monkey].items = match[1].split(', ').map(Number);
        else if ((match = line.match(/operation: (.*)/)))
            monkeys[monkey].operation = match[1].replace('new = ', '');
        else if ((match = line.match(/if (true|false): throw to monkey (\d+)/))) {
            let [_, condition, target] = match;
            monkeys[monkey][condition] = parseInt(target);
        } else if ((match = line.match(/test: divisible by (\d+)/))) {
            monkeys[monkey].test = parseInt(match[1]);
        }
    }
    return monkeys;
}

module.exports = { part1, part2 };