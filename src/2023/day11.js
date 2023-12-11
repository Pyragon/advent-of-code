function part1(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[0].length; x++)
            grid[y][x] = split[y][x];
    }
    let distance = getDistance(grid, 2);
    console.log('Answer to part 1:', distance);
}

function part2(contents, split) {
    let grid = [];
    for (let y = 0; y < split.length; y++) {
        grid[y] = [];
        for (let x = 0; x < split[0].length; x++)
            grid[y][x] = split[y][x];
    }
    let distance = getDistance(grid, 1000000);
    console.log('Answer to part 2:', distance);
}

function getDistance(grid, mult) {
    mult--;
    let galaxies = [];
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[0].length; x++) {
            if (grid[y][x] == '#') {
                galaxies.push({ x, y });
            }
        }
    }
    let checked = [];
    let distances = [];
    for (let i = 0; i < galaxies.length; i++) {
        for (let j = 0; j < galaxies.length; j++) {
            if (i == j || checked[i + ',' + j] || checked[j + ',' + i])
                continue;
            checked[i + ',' + j] = true;
            checked[j + ',' + i] = true;
            let startX = galaxies[i].x;
            let endX = galaxies[j].x;
            let startY = galaxies[i].y;
            let endY = galaxies[j].y;
            let x = startX;
            let y = startY;
            let steps = 0;
            while (y != endY) {
                let diff = endY - y;
                if (diff < 0)
                    y--;
                else
                    y++;
                steps++;
                if (!grid[y].includes('#'))
                    steps += mult;
            }
            while (x != endX) {
                let diff = endX - x;
                if (diff < 0)
                    x--;
                else
                    x++;
                steps++;
                let galaxy = false;
                for (let y = 0; y < grid.length; y++) {
                    if (grid[y][x] == '#')
                        galaxy = true;
                }
                if (!galaxy)
                    steps += mult;
            }
            distances.push(steps);
        }
    }
    return distances.reduce((a, b) => a + b, 0);
}

module.exports = { part1, part2 };