let _ = require('underscore');
let cliProgress = require('cli-progress');

function part1(contents, split) {
    // let generators = split.map(s => {
    //     let [generator, start] = s.match(/Generator (\w+) starts with (\d+)/).slice(1);
    //     return {
    //         generator,
    //         factor: generator == 'A' ? 16807 : 48271,
    //         lastValue: start
    //     };
    // });
    // generators = _.indexBy(generators, g => g.generator);
    // let bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    // bar.start(40000000, 0);
    // let count = 0;
    // for (let i = 0; i < 40000000; i++) {
    //     bar.increment();
    //     generators.A.lastValue = getNextValue(generators.A);
    //     generators.B.lastValue = getNextValue(generators.B);
    //     if (compareBits(decimalToBinary(generators.A.lastValue), decimalToBinary(generators.B.lastValue)))
    //         count++;
    // }
    // bar.stop();
    // console.log('Answer to part 1: ' + count);
}

function compareBits(a, b) {
    for (let i = 0; i < 16; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
}

function decimalToBinary(decimal) {
    let bin = decimal.toString(2);
    bin = bin.substring(bin.length - 16);
    return bin;
}

function getNextValue(generator) {
    let value = generator.lastValue;
    value *= generator.factor;
    value %= 2147483647;
    return value;
}

function part2(contents, split) {
    let generators = split.map(s => {
        let [generator, start] = s.match(/Generator (\w+) starts with (\d+)/).slice(1);
        return {
            generator,
            factor: generator == 'A' ? 16807 : 48271,
            lastValue: start
        };
    });
    generators = _.indexBy(generators, g => g.generator);
    let bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar.start(5000000, 0);
    let count = 0;
    let pairs = 0;
    while (pairs < 5000000) {
        if (generators.A.lastValue % 4 == 0 && generators.B.lastValue % 8 == 0) {
            bar.increment();
            pairs++;
            if (compareBits(decimalToBinary(generators.A.lastValue), decimalToBinary(generators.B.lastValue)))
                count++;
            generators.A.lastValue = getNextValue(generators.A);
            generators.B.lastValue = getNextValue(generators.B);
            continue;
        }
        if (generators.A.lastValue % 4 != 0)
            generators.A.lastValue = getNextValue(generators.A);
        if (generators.B.lastValue % 8 != 0)
            generators.B.lastValue = getNextValue(generators.B);
    }
    bar.stop();
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };