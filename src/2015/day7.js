function part1(contents, split) {
    let instructions = [];
    for (let line of split) {
        let [instr, wire] = line.split(' -> ');
        let [left, op, right] = instr.split(' ');
        if (!op) {
            left = !isNaN(left) ? parseInt(left) : left;
            instructions.push({ op: 'TO', left, wire });
            continue;
        }
        if (left == 'NOT') {
            left = !isNaN(op) ? parseInt(op) : op;
            instructions.push({ op: 'NOT', left, wire });
            continue;
        }
        left = !isNaN(left) ? parseInt(left) : left;
        right = !isNaN(right) ? parseInt(right) : right;
        instructions.push({ op, left, right, wire });
    }
    let getValue = (wire) => {
        for (let instr of instructions) {
            if (instr.wire != wire) continue;
            let left, right;
            switch (instr.op) {
                case 'TO':
                    return !isNaN(instr.left) ? parseInt(instr.left) : getValue(instr.left);
                case 'NOT':
                    return !isNaN(instr.left) ? ~parseInt(instr.left) & 65535 : ~getValue(instr.left) & 65535;
                case 'AND':
                    left = !isNaN(instr.left) ? parseInt(instr.left) : getValue(instr.left);
                    right = !isNaN(instr.right) ? parseInt(instr.right) : getValue(instr.right);
                    return left & right;
                case 'OR':
                    left = !isNaN(instr.left) ? parseInt(instr.left) : getValue(instr.left);
                    right = !isNaN(instr.right) ? parseInt(instr.right) : getValue(instr.right);
                    return left | right;
                case 'LSHIFT':
                    left = !isNaN(instr.left) ? parseInt(instr.left) : getValue(instr.left);
                    right = !isNaN(instr.right) ? parseInt(instr.right) : getValue(instr.right);
                    return left << right;
                case 'RSHIFT':
                    left = !isNaN(instr.left) ? parseInt(instr.left) : getValue(instr.left);
                    right = !isNaN(instr.right) ? parseInt(instr.right) : getValue(instr.right);
                    return left >> right;
            }
        }
    };
    console.log(getValue('a'));

}

function part2(contents, split) {

}

module.exports = { part1, part2 };