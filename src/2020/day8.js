let _ = require('underscore');

module.exports = {

    part1: function(contents, split) {
        let acc = this.getAcc(this.getInstructions(split));
        console.log('Answer to part 1: '+acc[0]);
    },

    getInstructions(split) {
        let instructions = [];
        let index = 0;
        for(let line of split) {
            let match = line.match(/([a-z]{3}) (\+|\-)(\d+)/);
            let opcode = match[1];
            let value = parseInt(match[3]);
            if(match[2] == '-')
                value *= -1;
            instructions.push({
                opcode,
                value,
                index: index++
            })
        }
        return _.indexBy(instructions, i => i.index);
    },

    getAcc(instructions) {
        let acc = 0;
        let index = 0;
        let visited = [];
        let executed = false;
        while(true) {
            if(visited[index]) {
                executed = false;
                break;
            }
            if(index > Object.keys(instructions).length-1) {
                executed = true;
                break;
            }
            visited[index] = true;
            let instruction = instructions[index];
            if(instruction.opcode == 'acc') {
                acc += instruction.value;
                index++;
            } else if(instruction.opcode == 'jmp')
                index += instruction.value;
            else if(instruction.opcode == 'nop')
                index++;
        }
        return [acc, executed];
    },

    part2: function(contents, split) {
        let changed = [];
        let acc;
        while(true) {
            let instructions = this.getInstructions(split);
            let changedVal = false;
            for(let i in instructions) {
                let instruction = instructions[i];
                if(instruction.opcode == 'acc' || changed[i])
                    continue;
                changed[i] = true;
                changedVal = true;
                instruction.opcode = instruction.opcode == 'nop' ? 'jmp' : 'nop';
                break;
            }
            if(!changedVal) {
                console.log('Unable to find value!');
                return;
            }
            let executed;
            [ acc, executed ] = this.getAcc(instructions);
            if(executed)
                break;
        }
        console.log('Answer to part 2: '+acc);
    },

};