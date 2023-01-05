function part1(contents, split) {

    /*
        [V]     [B]                     [C]
        [C]     [N] [G]         [W]     [P]
        [W]     [C] [Q] [S]     [C]     [M]
        [L]     [W] [B] [Z]     [F] [S] [V]
        [R]     [G] [H] [F] [P] [V] [M] [T]
        [M] [L] [R] [D] [L] [N] [P] [D] [W]
        [F] [Q] [S] [C] [G] [G] [Z] [P] [N]
        [Q] [D] [P] [L] [V] [D] [D] [C] [Z]
         1   2   3   4   5   6   7   8   9 
    */
    let stacks = [];
    // stacks[0] = ['Z', 'N'];
    // stacks[1] = ['M', 'C', 'D'];
    // stacks[2] = ['P'];
    stacks[0] = ['Q', 'F', 'M', 'R', 'L', 'W', 'C', 'V'];
    stacks[1] = ['D', 'Q', 'L'];
    stacks[2] = ['P', 'S', 'R', 'G', 'W', 'C', 'N', 'B'];
    stacks[3] = ['L', 'C', 'D', 'H', 'B', 'Q', 'G'];
    stacks[4] = ['V', 'G', 'L', 'F', 'Z', 'S'];
    stacks[5] = ['D', 'G', 'N', 'P'];
    stacks[6] = ['D', 'Z', 'P', 'V', 'F', 'C', 'W'];
    stacks[7] = ['C', 'P', 'D', 'M', 'S'];
    stacks[8] = ['Z', 'N', 'W', 'T', 'V', 'M', 'P', 'C'];

    for (let line of split) {
        let regex = /move (\d+) from (\d+) to (\d+)/;
        //if line does not match
        if (!regex.test(line))
            continue;
        let [_, count, from, to] = regex.exec(line);
        count = Number(count);
        from = Number(from) - 1;
        to = Number(to) - 1;
        for (let i = 0; i < count; i++) {
            let letter = stacks[from].pop();
            stacks[to].push(letter);
        }
    }
    let answer = '';
    for (let stack of stacks)
        answer += stack.pop();
    console.log('Answer to part 1: ' + answer);
}

function part2(contents, split) {
    let stacks = [];
    // stacks[0] = ['Z', 'N'];
    // stacks[1] = ['M', 'C', 'D'];
    // stacks[2] = ['P'];
    stacks[0] = ['Q', 'F', 'M', 'R', 'L', 'W', 'C', 'V'];
    stacks[1] = ['D', 'Q', 'L'];
    stacks[2] = ['P', 'S', 'R', 'G', 'W', 'C', 'N', 'B'];
    stacks[3] = ['L', 'C', 'D', 'H', 'B', 'Q', 'G'];
    stacks[4] = ['V', 'G', 'L', 'F', 'Z', 'S'];
    stacks[5] = ['D', 'G', 'N', 'P'];
    stacks[6] = ['D', 'Z', 'P', 'V', 'F', 'C', 'W'];
    stacks[7] = ['C', 'P', 'D', 'M', 'S'];
    stacks[8] = ['Z', 'N', 'W', 'T', 'V', 'M', 'P', 'C'];

    for (let line of split) {
        let regex = /move (\d+) from (\d+) to (\d+)/;
        //if line does not match
        if (!regex.test(line))
            continue;
        let [_, count, from, to] = regex.exec(line);
        count = Number(count);
        from = Number(from) - 1;
        to = Number(to) - 1;
        let toMove = [];
        for (let i = 0; i < count; i++) {
            let letter = stacks[from].pop();
            toMove.push(letter);
        }
        toMove = toMove.reverse();
        for (let letter of toMove)
            stacks[to].push(letter);
    }
    let answer = '';
    for (let stack of stacks)
        answer += stack.pop();
    console.log('Answer to part 2: ' + answer);
}

module.exports = { part1, part2 };