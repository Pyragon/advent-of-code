function part1(contents, split) {

    // let instructions = contents.split(',').map(Number);

    // let permutations = permutator([0, 1, 2, 3, 4]);
    // let highest = 0;
    // for (let permutation of permutations) {
    //     let output = 0;
    //     for (let phase of permutation) {
    //         let input = [phase, output];
    //         let parsed = parseInstructions(instructions, input);
    //         output = parsed[parsed.length - 1];
    //     }
    //     if (output > highest)
    //         highest = output;
    // }
    // console.log('Answer to part 1: ' + highest);

}

function parseInstructions(split, input, amplifier) {
    let outputs = [];
    let inputs = 0;
    for (let i = amplifier ? amplifier.ip : 0; i < split.length; i++) {
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
                split[output] = inputs == 0 ? input[0] : input[1];
                inputs++;
                break;
            case 4:
                let mode = modes[modeIndex++] || 0;
                output = split[i];
                let value = mode == 0 ? split[output] : output;
                if (value != 0)
                    outputs.push(value);
                if (amplifier) {
                    amplifier.ip = i + 1;
                    amplifier.instructions = split;
                    return outputs;
                }
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

const permutator = (inputArr) => {
    let result = [];

    const permute = (arr, m = []) => {
        if (arr.length === 0) {
            result.push(m)
        } else {
            for (let i = 0; i < arr.length; i++) {
                let curr = arr.slice();
                let next = curr.splice(i, 1);
                permute(curr.slice(), m.concat(next))
            }
        }
    }

    permute(inputArr)

    return result;
}

function part2(contents, split) {

    let instructions = contents.split(',').map(Number);

    let permutations = permutator([5, 6, 7, 8, 9]);
    let highest = 0;
    for (let permutation of permutations) {
        let output = 0;
        let phaseIndex = 0;
        let amplifiers = {};
        for (let phase of permutation) {
            amplifiers[phase] = {
                ip: 0,
                instructions,
                phase
            };
        }
        while (true) {
            let current = amplifiers[phaseIndex];
            let input = [current.phase, output];
            let parsed = parseInstructions(current.instructions, input, current);
            output = parsed[parsed.length - 1];
            phaseIndex++;
            if (phaseIndex == 5)
                phaseIndex = 0;
            if (output > highest)
                highest = output;
            if (parsed.length == 1)
                break;
        }
    }
    console.log('Answer to part 2: ' + highest);
}

module.exports = { part1, part2 };