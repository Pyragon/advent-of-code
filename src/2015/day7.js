let operators = {
    'AND': (a, b) => a & b,
    'OR': (a, b) => a | b,
    'LSHIFT': (a, b) => a << b,
    'RSHIFT': (a, b) => a >> b,
    'NOT': (a) => ~a
};

function part1(contents, split) {

    let wires = {};
    let finished = false;
    let index = 0;
    let run = [];
    while (index < split.length) {
        let line = split[index++];
        if (run.includes(line)) continue;
        if (index >= split.length)
            index = 0;
        // console.log(index + ': ' + line);
        finished = true;
        let [left, wire] = line.split(' -> ');
        let leftSplit = left.split(' ');
        if (leftSplit.length == 1) {
            wires[wire] = parseInt(leftSplit[0]);
            run.push(line);
        } else if (leftSplit.length == 2) {
            let value = operators['NOT'](parseInt(wires[leftSplit[1]]));
            value = ((value % 65536) + 65536) % 65536;
            wires[wire] = value;
            run.push(line);
        } else if (leftSplit.length == 3) {
            let [a, op, b] = leftSplit;
            if ((wires[a] === undefined && isNaN(a)) || (wires[b] === undefined && isNaN(b))) {
                finished = false;
                // console.log('Wire not found: ' + a + ' ' + b + ', ' + wires[a] + ' ' + wires[b]);
                continue;
            }
            run.push(line);
            wires[wire] = operators[op](!isNaN(a) ? parseInt(a) : wires[a], !isNaN(b) ? parseInt(b) : wires[b]);
        }
        console.log(wires);
    }
    console.log('Answer to part 1: ' + wires['a']);
}

function part2(contents, split) {

}

module.exports = { part1, part2 };