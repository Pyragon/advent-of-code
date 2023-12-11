function part1(contents, split) {
    // let instructions = split[0].split('');

    // let nodes = {};
    // for (let i = 2; i < split.length; i++) {
    //     let line = split[i];
    //     let match = line.match(/([A-Z0-9]{3}) = \(([A-Z0-9]{3}), ([A-Z0-9]{3})\)/);
    //     let [_, node, left, right] = match;
    //     nodes[node] = {
    //         left,
    //         right
    //     }
    // }
    // let index = 0;
    // let steps = 0;
    // let cur = 'AAA';
    // while (true) {
    //     if (cur == 'ZZZ') break;
    //     let instruction = instructions[index++ % instructions.length];
    //     let node = nodes[cur];
    //     cur = instruction == 'L' ? node.left : node.right;
    //     steps++;
    // }
    // console.log(steps);
}

function part2(contents, split) {
    let instructions = split[0].split('');

    let nodes = {};
    for (let i = 2; i < split.length; i++) {
        let line = split[i];
        let match = line.match(/([A-Z0-9]{3}) = \(([A-Z0-9]{3}), ([A-Z0-9]{3})\)/);
        let [_, node, left, right] = match;
        nodes[node] = {
            node,
            left,
            right
        }
    }
    let cur = [];
    let index = 0;
    let steps = 0;
    for (let node in nodes) {
        if (node.endsWith('A'))
            cur.push(nodes[node]);
    }
    let i = 0;
    // console.log(cur);
    while (true) {
        if (cur.filter(n => !n.node.endsWith('Z')).length == 0) {
            console.log('finished');
            break;
        }
        let instruction = instructions[index++ % instructions.length];
        let newCur = [];
        for (let node of cur)
            newCur.push(instruction == 'L' ? nodes[node.left] : nodes[node.right]);
        cur = newCur;
        // console.log(instruction, cur);
        steps++;
    }
    console.log(steps);
}

module.exports = { part1, part2 };