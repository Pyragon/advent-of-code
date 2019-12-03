module.exports = {

    part1: function(contents, split) {
        split = contents.split(',').map(Number);
        split[1] = 12;
        split[2] = 2;
        console.log('Part 1: '+this.parseInstructions(split)[0]);
    },

    part2: function (contents, split) {
        split = contents.split(',').map(Number);
        for(let noun = 0; noun < 100; noun++) {
            for(let verb = 0; verb < 100; verb++) {
                let arr = split.slice(0);
                arr[1] = noun;
                arr[2] = verb;
                arr = this.parseInstructions(arr);
                if (arr[0] == 19690720) {
                    console.log('Part 2: '+(100 * noun + verb));
                    return;
                }
            }
        }
    },

    parseInstructions(split) {
        for (let i = 0; i < split.length; i++) {
            let opcode = split[i++];
            if (opcode == 99) return split;

            if (opcode != 1 && opcode != 2) {
                console.error('Encountered invalid opcode: ' + opcode);
                return split;
            }
            let first = split[i++];
            let second = split[i++];
            let output = split[i];
            split[output] = opcode == 1 ? split[first] + split[second] : split[first] * split[second];
        }
    }

}