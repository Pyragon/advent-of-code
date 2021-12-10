function part1(contents, split) {
    split = contents.split(',').map(Number);
    let outputs = parseInstructions(split, 1);
    console.log('Answer to part 1: ' + outputs[outputs.length - 1]);
}

function part2(contents, split) {
    split = contents.split(',').map(Number);
    let outputs = parseInstructions(split, 5);
    console.log('Answer to part 2: ' + outputs[outputs.length - 1]);
}

function parseInstructions(split, input) {
    let outputs = [];
    for (let i = 0; i < split.length; i++) {
        let instruction = split[i++].toString();
        let opcode = parseInt(instruction.substring(instruction.length - 2));
        let modes = instruction.substring(0, instruction.length - 2).split('').reverse().map(Number);
        if (opcode == 99)
            return outputs;
        let modeIndex = 0;
        if (opcode < 1 || opcode > 8) {
            console.error('Encountered invalid opcode: ' + opcode);
            return outputs;
        }
        let output;
        let mode1, mode2, first, second;
        switch (opcode) {
            case 1:
            case 2:
                mode1 = modes[modeIndex++] || 0;
                mode2 = modes[modeIndex++] || 0;
                modeIndex++; // skip output mode, will always be 0
                first = split[i++];
                second = split[i++];
                first = mode1 == 0 ? split[first] : first;
                second = mode2 == 0 ? split[second] : second;
                output = split[i];
                split[output] = opcode == 1 ? first + second : first * second;
                break;
            case 3:
                modeIndex++;
                output = split[i];
                split[output] = input;
                break;
            case 4:
                let mode = modes[modeIndex++] || 0;
                output = split[i];
                outputs.push(mode == 0 ? split[output] : output);
                break;
            case 5:
            case 6:
                mode1 = modes[modeIndex++] || 0;
                mode2 = modes[modeIndex++] || 0;
                first = split[i++];
                second = split[i];
                first = mode1 == 0 ? split[first] : first;
                second = mode2 == 0 ? split[second] : second;
                if (opcode == 5 && first != 0 || opcode == 6 && first == 0)
                    i = second - 1;
                break;
            case 7:
            case 8:
                mode1 = modes[modeIndex++] || 0;
                mode2 = modes[modeIndex++] || 0;
                modeIndex++; // skip output mode, will always be 0
                first = split[i++];
                second = split[i++];
                first = mode1 == 0 ? split[first] : first;
                second = mode2 == 0 ? split[second] : second;
                if (first < second && opcode == 7 || first == second && opcode == 8)
                    split[split[i]] = 1;
                else
                    split[split[i]] = 0;
                break;
        }
    }
    return outputs;
}

module.exports = { part1, part2, parseInstructions };