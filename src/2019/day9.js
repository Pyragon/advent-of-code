function part1(contents, split) {

    let memory = new Array(50000).fill(0);
    let instructions = contents.trim().split(',').map(BigInt);
    for (let i = 0; i < instructions.length; i++)
        memory[i] = instructions[i];
    let outputs = parseInstructions(memory, 1);
    console.log(outputs);
    console.log('Answer to part 1: ' + outputs[0]);

}

function part2(contents, split) {

}

function parseInstructions(split, input) {
    let outputs = [];
    let relativeBase = BigInt(0);
    for (let i = BigInt(0); i < split.length; i++) {
        let instruction = split[i++].toString();
        let opcode = parseInt(instruction.substring(instruction.length - 2));
        let modes = instruction.substring(0, instruction.length - 2).split('').reverse().map(Number);
        if (opcode == 99)
            return outputs;
        let modeIndex = 0;
        if (opcode < 1 || opcode > 9) {
            console.error('Encountered invalid opcode: ' + opcode);
            return outputs;
        }
        let output;
        let mode1, mode2, mode3, first, second;
        switch (opcode) {
            case 1:
            case 2:
                mode1 = modes[modeIndex++] || 0;
                mode2 = modes[modeIndex++] || 0;
                mode3 = modes[modeIndex++] || 0; // skip output mode, will always be 0
                first = getValue(split, i++, mode1, relativeBase);
                second = getValue(split, i++, mode2, relativeBase);
                output = getPosition(split, i, mode3, relativeBase);
                split[output] = opcode == 1 ? first + second : first * second;
                break;
            case 3:
                mode3 = modes[modeIndex++] || 0; // skip output mode, will always be 0
                output = getPosition(split, i, mode3, relativeBase);
                split[output] = input;
                break;
            case 4:
                let mode = modes[modeIndex++] || 0;
                outputs.push(getValue(split, i, mode, relativeBase));
                break;
            case 5:
            case 6:
                mode1 = modes[modeIndex++] || 0;
                mode2 = modes[modeIndex++] || 0;
                first = getValue(split, i++, mode1, relativeBase);
                second = getValue(split, i++, mode2, relativeBase);
                if (opcode == 5 && first != 0 || opcode == 6 && first == 0)
                    i = second - BigInt(1);
                break;
            case 7:
            case 8:
                mode1 = modes[modeIndex++] || 0;
                mode2 = modes[modeIndex++] || 0;
                mode3 = modes[modeIndex++] || 0; // skip output mode, will always be 0
                first = getValue(split, i++, mode1, relativeBase);
                second = getValue(split, i++, mode2, relativeBase);
                if (first < second && opcode == 7 || first == second && opcode == 8)
                    split[getPosition(split, i, mode3, relativeBase)] = 1;
                else
                    split[getPosition(split, i, mode3, relativeBase)] = 0;
                break;
            case 9:
                relativeBase += split[i];
                break;
        }
    }
    return outputs;
}

function getValue(split, index, mode, relativeBase) {
    if (mode == 0)
        return BigInt(split[split[index]]);
    if (mode == 1)
        return BigInt(split[index]);
    if (mode == 2)
        return BigInt(split[relativeBase + split[index]]);
}

function getPosition(split, index, mode, relativeBase) {
    if (mode == 0)
        return split[index];
    if (mode == 2)
        return relativeBase + split[index];
}

module.exports = { part1, part2 };