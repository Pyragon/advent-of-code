function part1(_, split) {
    let visited = [];
    let head = [0, 0];
    let tail = [0, 0];
    visited.push([tail[0], tail[1]]);
    for (let line of split) {
        line = line.split(' ');
        let dir = line[0];
        let steps = Number(line[1]);
        for (let step = 0; step < steps; step++) {
            switch (dir) {
                case 'U':
                    head[1]--;
                    break;
                case 'D':
                    head[1]++;
                    break;
                case 'L':
                    head[0]--;
                    break;
                case 'R':
                    head[0]++;
                    break;
            }
            // console.log('head: ' + head, 'tail: ' + tail);
            //if tail is more than 2 steps away from head, move tail closer to head
            //diagonal is okay
            if (Math.abs(head[0] - tail[0]) > 1 || Math.abs(head[1] - tail[1]) > 1) {
                // console.log('too much diff, we moving');
                if (head[0] > tail[0]) {
                    tail[0]++;
                } else if (head[0] < tail[0]) {
                    tail[0]--;
                }
                if (head[1] > tail[1]) {
                    tail[1]++;
                } else if (head[1] < tail[1]) {
                    tail[1]--;
                }
                // console.log('head: ' + head, 'tail: ' + tail);
                if (!visited.some(e => e[0] === tail[0] && e[1] === tail[1]))
                    visited.push([tail[0], tail[1]]);
            }
        }
    }
    console.log('Answer to part 1: ' + visited.length);
}

function part2(_, split) {
    let visited = [];
    let head = [0, 0];
    let tail = [0, 0];
    visited.push([tail[0], tail[1]]);
    //create linked list with head, tail, and 8 other nodes
    let nodes = [];
    for (let i = 0; i < 10; i++)
        nodes.push([0, 0]);
    nodes[0] = head;
    nodes[1] = tail;
    for (let line of split) {
        line = line.split(' ');
        let dir = line[0];
        let steps = Number(line[1]);
        for (let step = 0; step < steps; step++) {
            switch (dir) {
                case 'U':
                    nodes[0][0]--;
                    break;
                case 'D':
                    nodes[0][0]++;
                    break;
                case 'L':
                    nodes[0][1]--;
                    break;
                case 'R':
                    nodes[0][1]++;
                    break;
            }
            for (let i = 1; i < nodes.length; i++) {
                if (Math.abs(nodes[i - 1][0] - nodes[i][0]) > 1 || Math.abs(nodes[i - 1][1] - nodes[i][1]) > 1) {
                    // console.log('too much diff, we moving', i, Math.abs(nodes[i - 1][0] - nodes[i][0]), Math.abs(nodes[i - 1][1] - nodes[0][1]));
                    if (nodes[i - 1][0] > nodes[i][0]) {
                        nodes[i][0]++;
                    } else if (nodes[i - 1][0] < nodes[i][0]) {
                        nodes[i][0]--;
                    }
                    if (nodes[i - 1][1] > nodes[i][1]) {
                        nodes[i][1]++;
                    } else if (nodes[i - 1][1] < nodes[i][1]) {
                        nodes[i][1]--;
                    }
                    // console.log('head: ' + head, 'tail: ' + tail);
                    if (i == nodes.length - 1 && !visited.some(e => e[0] === nodes[i][0] && e[1] === nodes[i][1]))
                        visited.push([nodes[i][0], nodes[i][1]]);
                }
            }
            // displayGrid(nodes);
        }
    }
    console.log('Answer to part 2: ' + visited.length);
    // displayGrid(nodes);
}

function displayGrid(nodes) {
    let grid = [];
    for (let y = -6; y < 6; y++) {
        if (!grid[y]) grid[y] = [];
        for (let x = -6; x < 6; x++) {
            grid[y][x] = '.';
        }
    }
    for (let i = 0; i < nodes.length; i++) {
        if (grid[nodes[i][0]][nodes[i][1]] == '.')
            grid[nodes[i][0]][nodes[i][1]] = i == 0 ? 'H' : i == nodes.length - 1 ? 'T' : i;
    }

    for (let y = -6; y < 6; y++) {
        let row = '';
        for (let x = -6; x < 6; x++) {
            row += grid[y][x];
        }
        console.log(row);
    }
}

module.exports = { part1, part2 };