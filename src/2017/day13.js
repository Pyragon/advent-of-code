function part1(contents, split) {

    let max = Math.max(...split.map(x => parseInt(x.split(':')[0])));
    let maxDepth = Math.max(...split.map(x => parseInt(x.split(':')[1])));

    let grid = [];
    for (let i = 0; i <= max; i++)
        grid[i] = null;
    for (let line of split) {
        let [index, depth] = line.split(':').map(Number);
        grid[index] = {
            index,
            scanner: 0,
            direction: 1,
            depth
        };
    }
    let caught = [];
    for (let i = 0; i <= max; i++) {
        // printFirewall(grid, maxDepth, i);
        //check if caught
        if (grid[i] && grid[i].scanner == 0) {
            caught.push(i * grid[i].depth);
            // console.log('Caught at ' + i * grid[i].depth);
        }
        //move scanners
        for (let j = 0; j < grid.length; j++) {
            if (grid[j]) {
                grid[j].scanner += grid[j].direction;
                if (grid[j].scanner == grid[j].depth - 1 || grid[j].scanner == 0)
                    grid[j].direction *= -1;
            }
        }
    }
    console.log('Answer to part 1: ' + caught.reduce((a, b) => a + b));
}

function printFirewall(grid, maxDepth, x) {
    console.log(' ' + Array(grid.length).fill(0).map((x, i) => i).join('   '));
    for (let i = 0; i < maxDepth; i++) {
        let line = '';
        for (let j = 0; j < grid.length; j++) {
            if (!grid[j]) {
                if (j == x && i == 0)
                    line += '(.)';
                else
                    line += '...';
            } else {
                if (grid[j].depth > i) {
                    if (j == x && i == 0) {
                        if (grid[j].scanner == i)
                            line += '(S)';
                        else
                            line += '( )';
                    } else {
                        if (grid[j].scanner == i)
                            line += '[S]';
                        else
                            line += '[ ]';
                    }
                } else
                    line += '...';
            }
            if (j != grid.length - 1)
                line += ' ';
        }
        console.log(line);
    }
}

function part2(contents, split) {

    let max = Math.max(...split.map(x => parseInt(x.split(':')[0])));
    let maxDepth = Math.max(...split.map(x => parseInt(x.split(':')[1])));

    let grid = [];
    for (let i = 0; i <= max; i++)
        grid[i] = null;
    for (let line of split) {
        let [index, depth] = line.split(':').map(Number);
        grid[index] = {
            index,
            scanner: 0,
            direction: 1,
            depth
        };
    }
    let delay = 0;
    del: while (true) {
        delay++;
        for (let i = 0; i < grid.length; i++) {
            let g = grid[i];
            if (!g) continue;
            let pos = getScannerPos(g.depth, delay + i);
            if (pos == 0)
                continue del;
        }
        break;
    }
    console.log('Answer to part 2: ' + delay);
}

function getScannerPos(height, time) {
    let offset = time % ((height - 1) * 2);

    return offset < height - 1 ? offset : (height - 1) * 2 - offset;
}

module.exports = { part1, part2 };