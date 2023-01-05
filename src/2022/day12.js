function part1(contents, split) {
    split = split.map(x => x.trim().split(''));
    let start = [];
    let end = [];
    let elevations = [];
    let answer = 0;
    for (let y = 0; y < split.length; y++) {
        if (!elevations[y]) elevations[y] = [];
        for (let x = 0; x < split[0].length; x++) {
            if (split[y][x] == 'S') {
                start = [y, x];
                elevations[y][x] = 1;
            } else if (split[y][x] == 'E') {
                end = [y, x];
                elevations[y][x] = 26;
            } else
                elevations[y][x] = split[y][x].charCodeAt(0) - 96;
        }
    }
    //create a breadth first search to get from S to E
    let queue = [
        [start, 0]
    ];
    let visited = {};
    while (queue.length > 0) {
        let [
            [y, x], steps
        ] = queue.shift();
        if (visited[`${y},${x}`])
            continue;
        visited[`${y},${x}`] = true;
        if (y == end[0] && x == end[1]) {
            answer = steps;
            break;
        }
        let dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
        for (let dir of dirs) {
            let yy = y + dir[0];
            let xx = x + dir[1];
            if (yy < 0 || xx < 0 || yy >= split.length || xx >= split[0].length || elevations[yy][xx] > elevations[y][x] + 1)
                continue;
            queue.push([
                [yy, xx], steps + 1
            ]);
        }
    }
    console.log('Answer to part 1: ' + answer);
}

function part2(contents, split) {
    split = split.map(x => x.trim().split(''));
    let start = [];
    let end = [];
    let elevations = [];
    let answer = 0;
    for (let y = 0; y < split.length; y++) {
        if (!elevations[y]) elevations[y] = [];
        for (let x = 0; x < split[0].length; x++) {
            if (split[y][x] == 'S') {
                start = [y, x];
                elevations[y][x] = 1;
            } else if (split[y][x] == 'E') {
                end = [y, x];
                elevations[y][x] = 26;
            } else
                elevations[y][x] = split[y][x].charCodeAt(0) - 96;
        }
    }
    //create a breadth first search to get from S to E
    let queue = [];
    for (let y = 0; y < split.length; y++) {
        for (let x = 0; x < split[0].length; x++) {
            if (elevations[y][x] == 1)
                queue.push([
                    [y, x], 0
                ]);
        }
    }
    let visited = {};
    while (queue.length > 0) {
        let [
            [y, x], steps
        ] = queue.shift();
        if (visited[`${y},${x}`])
            continue;
        visited[`${y},${x}`] = true;
        if (y == end[0] && x == end[1]) {
            answer = steps;
            break;
        }
        let dirs = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
        for (let dir of dirs) {
            let yy = y + dir[0];
            let xx = x + dir[1];
            if (yy < 0 || xx < 0 || yy >= split.length || xx >= split[0].length || elevations[yy][xx] > elevations[y][x] + 1)
                continue;
            queue.push([
                [yy, xx], steps + 1
            ]);
        }
    }
    console.log('Answer to part 1: ' + answer);
}

module.exports = { part1, part2 };