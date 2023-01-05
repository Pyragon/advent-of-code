function part1(contents, split) {
    split = split.map(x => x.split('').map(Number));
    let visible = [];
    for (let y = 0; y < split.length; y++) {
        for (let x = 0; x < split[0].length; x++) {
            if (!visible[y]) visible[y] = [];
            if (y == 0 || y == split.length - 1 || x == 0 || x == split[0].length - 1) visible[y][x] = 1;
        }
    }
    for (let y = 0; y < split.length; y++) {
        if (!visible[y]) visible[y] = [];
        let max = 0;
        for (let x = 0; x < split[y].length; x++) {
            if (visible[y][x] == 1) {
                if (split[y][x] > max)
                    max = split[y][x];
                continue;
            }
            if (split[y][x] > max) {
                max = split[y][x];
                visible[y][x] = 1;
            }
        }
    }
    for (let y = 0; y < split.length; y++) {
        if (!visible[y]) visible[y] = [];
        let max = 0;
        for (let x = split[y].length - 1; x >= 0; x--) {
            if (visible[y][x] == 1) {
                if (split[y][x] > max)
                    max = split[y][x];
                continue;
            }
            if (split[y][x] > max) {
                max = split[y][x];
                visible[y][x] = 1;
            }
        }
    }
    for (let x = 0; x < split[0].length; x++) {
        let max = 0;
        for (let y = 0; y < split.length; y++) {
            if (visible[y][x] == 1) {
                if (split[y][x] > max)
                    max = split[y][x];
                continue;
            }
            if (split[y][x] > max) {
                max = split[y][x];
                visible[y][x] = 1;
            }
        }
    }
    for (let x = 0; x < split[0].length; x++) {
        let max = 0;
        for (let y = split.length - 1; y >= 0; y--) {
            if (visible[y][x] == 1) {
                if (split[y][x] > max)
                    max = split[y][x];
                continue;
            }
            if (split[y][x] > max) {
                max = split[y][x];
                visible[y][x] = 1;
            }
        }
    }
    let count = 0;
    for (let y = 0; y < visible.length; y++) {
        for (let x = 0; x < visible[y].length; x++) {
            if (visible[y][x] == 1) count++;
        }
    }
    console.log('Answer to part 1: ' + count);
}

function printGrid(split, visible) {
    for (let y = 0; y < split.length; y++) {
        let line = '';
        for (let x = 0; x < split[y].length; x++) {
            if (visible[y][x] == 1)
                line += split[y][x];
            else
                line += '.';
        }
        console.log(line);
    }
}

function part2(contents, split) {
    split = split.map(x => x.split('').map(Number));
    let dirs = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
    ];
    let total = [];
    for (let y = 0; y < split.length; y++) {
        for (let x = 0; x < split[0].length; x++) {
            let scores = [];
            for (let dir of dirs) {
                let xx = x;
                let yy = y;
                let count = 0;
                while (true) {
                    xx += dir[0];
                    yy += dir[1];
                    if (xx < 0 || xx >= split[0].length || yy < 0 || yy >= split.length) break;
                    count++;
                    if (split[yy][xx] >= split[y][x]) break;
                }
                scores.push(count);
            }
            total.push(scores.reduce((a, b) => a * b, 1));
        }
    }
    console.log('Answer to part 2: ' + Math.max(...total));
}

module.exports = { part1, part2 };