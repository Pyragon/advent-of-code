function part1(contents, split) {
    let grid = [];
    for(let line of split)
        grid.push(line.split(''));

    let ans = 0;
    for(let y = 0; y < grid.length; y++) {
        for(let x = 0; x < grid[y].length; x++) {
            let cell = grid[y][x];
            if(cell == '.') continue;
            let neighbours = 0;
            for(let dy = -1; dy <= 1; dy++) {
                for(let dx = -1; dx <= 1; dx++) {
                    if(dy == 0 && dx == 0) continue;
                    let ny = y + dy;
                    let nx = x + dx;
                    if(ny < 0 || ny >= grid.length || nx < 0 || nx >= grid[ny].length) continue;
                    if(grid[ny][nx] == '@') neighbours++;
                }
            }
            if(neighbours < 4) ans++;
        }
    }
    console.log('Answer to Part 1: '+ans);
}

function part2(contents, split) {
    let grid = [];
    for(let line of split)
        grid.push(line.split(''));

    let ans = 0;
    while(true) {
        let toRemove = [];
        for(let y = 0; y < grid.length; y++) {
            for(let x = 0; x < grid[y].length; x++) {
                let cell = grid[y][x];
                if(cell == '.') continue;
                let neighbours = 0;
                for(let dy = -1; dy <= 1; dy++) {
                    for(let dx = -1; dx <= 1; dx++) {
                        if(dy == 0 && dx == 0) continue;
                        let ny = y + dy;
                        let nx = x + dx;
                        if(ny < 0 || ny >= grid.length || nx < 0 || nx >= grid[ny].length) continue;
                        if(grid[ny][nx] == '@') neighbours++;
                    }
                }
                if(neighbours < 4) toRemove.push([x, y]);
            }
        }
        if(toRemove.length == 0) break;
        for(let [x, y] of toRemove) {
            grid[y][x] = '.';
            ans++;
        }
    }
    console.log('Answer to Part 2: '+ans);
}

module.exports = { part1, part2 };