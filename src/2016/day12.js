function part1(contents, split) {

    let registers = {
        'a': 0,
        'b': 0,
        'c': 0,
        'd': 0
    };

    for (let i = 0; i < split.length; i++) {
        let instruction = split[i];
        let [op, x, y] = instruction.split(' ');
        if (op == 'cpy') {
            if (isNaN(x))
                registers[y] = registers[x];
            else
                registers[y] = Number(x);
        } else if (op == 'inc')
            registers[x]++;
        else if (op == 'dec')
            registers[x]--;
        else if (op == 'jnz') {
            if (isNaN(x))
                x = registers[x];
            if (isNaN(y))
                y = registers[y];
            if (x != 0)
                i += y - 1;
        }
    }
    console.log('Answer to part 1: ' + registers['a']);
}

function part2(contents, split) {

    let registers = {
        'a': 0,
        'b': 0,
        'c': 1,
        'd': 0
    };

    for (let i = 0; i < split.length; i++) {
        let instruction = split[i];
        let [op, x, y] = instruction.split(' ');
        if (op == 'cpy') {
            if (isNaN(x))
                registers[y] = registers[x];
            else
                registers[y] = Number(x);
        } else if (op == 'inc')
            registers[x]++;
        else if (op == 'dec')
            registers[x]--;
        else if (op == 'jnz') {
            if (isNaN(x))
                x = registers[x];
            if (isNaN(y))
                y = registers[y];
            if (x != 0)
                i += y - 1;
        }
    }
    console.log('Answer to part 2: ' + registers['a']);

}

module.exports = { part1, part2 };