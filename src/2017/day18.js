function part1(contents, split) {

    let registers = {};
    let lastSound = 0;
    instr: for (let i = 0; i < split.length; i++) {
        let instruction = split[i];
        let [command, register, value] = instruction.split(' ');
        if (!registers[register]) {
            registers[register] = 0;
        }
        if (value !== undefined && !registers[value])
            registers[value] = 0;
        switch (command) {
            case 'rcv':
                if ((!isNaN(register) && register > 0) || (isNaN(register) && registers[register] > 0)) {
                    console.log('Answer to part 1: ' + lastSound);
                    break instr;
                }
                break;
            case 'snd':
                lastSound = registers[register];
                break;
            case 'set':
                if (isNaN(value))
                    value = registers[value];
                registers[register] = parseInt(value);
                break;
            case 'add':
                if (isNaN(value))
                    value = registers[value];
                registers[register] += parseInt(value);
                break;
            case 'mul':
                if (isNaN(value))
                    value = registers[value];
                registers[register] *= parseInt(value);
                break;
            case 'mod':
                if (isNaN(value))
                    value = registers[value];
                registers[register] %= parseInt(value);
                break;
            case 'jgz':
                if (!isNaN(register) && register > 0)
                    i += parseInt(value) - 1;
                else if (isNaN(register) && registers[register] > 0)
                    i += parseInt(value) - 1;
                break;
        }
        if (command === 'inc') {
            registers[register] += parseInt(value);
        } else if (command === 'dec') {
            registers[register] -= parseInt(value);
        }
    }
}

function part2(contents, split) {

    let programQueues = [];
    programQueues[0] = [];
    programQueues[1] = [];
    let count = 0;
    for (let j = 0; j < 2; j++) {
        let registers = {};
        registers['p'] = j;
        instr: for (let i = 0; i < split.length; i++) {
            let instruction = split[i];
            let [command, register, value] = instruction.split(' ');
            if (!registers[register]) {
                registers[register] = 0;
            }
            if (value !== undefined && !registers[value])
                registers[value] = 0;
            let queue;
            switch (command) {
                case 'rcv':
                    queue = programQueues[j == 0 ? 1 : 0];
                    if (queue.length == 0)
                        break instr;
                    registers[register] = queue.shift();
                    break;
                case 'snd':
                    queue = programQueues[j];
                    queue.push(registers[register]);
                    if (j == 1)
                        count++;
                    break;
                case 'set':
                    if (isNaN(value))
                        value = registers[value];
                    registers[register] = parseInt(value);
                    break;
                case 'add':
                    if (isNaN(value))
                        value = registers[value];
                    registers[register] += parseInt(value);
                    break;
                case 'mul':
                    if (isNaN(value))
                        value = registers[value];
                    registers[register] *= parseInt(value);
                    break;
                case 'mod':
                    if (isNaN(value))
                        value = registers[value];
                    registers[register] %= parseInt(value);
                    break;
                case 'jgz':
                    if (!isNaN(register) && register > 0)
                        i += parseInt(value) - 1;
                    else if (isNaN(register) && registers[register] > 0)
                        i += parseInt(value) - 1;
                    break;
            }
            if (command === 'inc') {
                registers[register] += parseInt(value);
            } else if (command === 'dec') {
                registers[register] -= parseInt(value);
            }
        }
    }
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };