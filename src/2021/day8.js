let Permutations = require('js-combinatorics').Permutation;

function part1(contents, split) {
    let count = 0;
    for (let line of split) {
        let outputValues = line.split(' | ')[1].split(' ');
        for (let value of outputValues) {
            if (value.length === 2 || value.length === 3 || value.length === 4 || value.length === 7) {
                count++;
            }
        }
    }
    console.log('Answer to part 1: ' + count);
}

let correct = {
    0: 'abcefg',
    1: 'cf',
    2: 'acdeg',
    3: 'acdfg',
    4: 'bcdf',
    5: 'abdfg',
    6: 'abdefg',
    7: 'acf',
    8: 'abcdefg',
    9: 'abcdfg'
}

function part2(contents, split) {
    let count = 0;
    for (let line of split) {
        let permutations = new Permutations('abcdefg');
        perm: for (let permutation of permutations.toArray()) {
            let substition = {
                a: permutation[0],
                b: permutation[1],
                c: permutation[2],
                d: permutation[3],
                e: permutation[4],
                f: permutation[5],
                g: permutation[6]
            }
            let numbers = [];
            for (let key of Object.keys(correct)) {
                let value = correct[key];
                let substitution = '';
                for (let letter of value)
                    substitution += substition[letter];
                //sort alphabetically
                numbers[key] = substitution.split('').sort().join('');
            }
            let values = line.split(' | ');
            let inputValues = values[0].split(' ');
            let outputValues = values[1].split(' ');
            for (let i = 0; i < inputValues.length; i++) {
                let value = inputValues[i].split('').sort().join('');
                if (numbers.filter(x => x == value).length == 0) continue perm;
            }
            let code = '';
            for (let i = 0; i < outputValues.length; i++) {
                let value = outputValues[i].split('').sort().join('');
                for (let key in numbers) {
                    if (numbers[key] == value) {
                        code += key.toString();
                        break;
                    }
                }
            }
            count += parseInt(code);
        }
    }
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };