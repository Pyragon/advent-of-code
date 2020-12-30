let chalk = require('chalk');

module.exports = {

    part1: function(contents, split) {
        let grid = this.buildGrid(split);
        let copy = JSON.parse(JSON.stringify(grid));
        let changed = 0;
        while(true) {
            for(let y = 0; y < grid.length; y++) {
                for(let x = 0; x < grid[0].length; x++) {
                    let spot = grid[y][x];
                    if(spot == '.') continue;
                    else if(spot == 'L') {
                        let adjacent = this.getAdjacent(x, y, grid);
                        if(adjacent.filter(a => a == '#').length == 0) {
                            copy[y][x] = '#';
                            changed++;
                        }
                    } else if(spot == '#') {
                        let adjacent = this.getAdjacent(x, y, grid);
                        if(adjacent.filter(a => a == '#').length >= 4) {
                            copy[y][x] = 'L';
                            changed++;
                        }
                    }
                }
            }
            grid = JSON.parse(JSON.stringify(copy));
            if(changed == 0)
                break;
            changed = 0;
        }
        let occupied = 0;
        for(let y = 0; y < grid.length; y++)
            for(let x = 0; x < grid[0].length; x++)
                if(grid[y][x] == '#') occupied++;
        console.log('Answer for part 1: '+occupied);

    },

    visualize(grid, hX=-1, hY=-1) {
        for(let y = 0; y < grid.length; y++) {
            let str = [];
            for(let x = 0; x < grid[0].length; x++) {
                if(x == hX && y == hY)
                    str.push(chalk.red(grid[y][x]));
                else
                    str.push(grid[y][x]);
            }
            console.log(str.join(''));
        }
    },

    getAdjacent(x, y, grid) {
        let adjacent = [];
        for(let y2 = y-1; y2 <= y+1; y2++) {
            for(let x2 = x-1; x2 <= x+1; x2++) {
                if(x2 < 0 || y2 < 0 || x2 > grid[0].length-1 || y2 > grid.length-1 || (x == x2 && y == y2))
                    continue;
                adjacent.push(grid[y2][x2]);
            }
        }
        return adjacent;
    },

    getSeen(y, x, grid) {
        let seen = [];
        //directions, northwest, north, northeast, etc
        let dirs = [ 
                    [ -1, -1 ], [ 0, -1 ],  [ 1, -1 ],
                    [ -1, 0 ],  [       ],  [ 1, 0 ],
                    [ -1, 1 ],  [ 0, 1 ],   [ 1, 1 ]
                ];
        let realX = x;
        let realY = y;
        dirS: for(let dir of dirs) {
            x = realX;
            y = realY;
            if(dir.length == 0) continue; //current seat
            w: while(true) {
                x += dir[0];
                y += dir[1];
                if(x < 0 || y < 0 || x > grid[0].length-1 || y > grid.length-1)
                    continue dirS;
                let seat = grid[y][x];
                if(seat == '.') continue w;
                seen.push(seat);
                continue dirS;
            }
        }
        return seen;
    },

    buildGrid(split) {
        let grid = [];
        for(let y = 0; y < split.length; y++) {
            grid[y] = [];
            for(let x = 0; x < split[0].length; x++)
                grid[y][x] = split[y][x];
        }
        return grid;
    },

    part2: function(contents, split) {
        let grid = this.buildGrid(split);
        let copy = JSON.parse(JSON.stringify(grid));
        let changed = 0;
        let runs = 0;
        while(true) {
            for(let y = 0; y < grid.length; y++) {
                for(let x = 0; x < grid[0].length; x++) {
                    let spot = grid[y][x];
                    if(spot == '.') continue;
                    else if(spot == 'L') {
                        let adjacent = this.getSeen(y, x, grid);
                        if(adjacent.filter(a => a == '#').length == 0) {
                            copy[y][x] = '#';
                            changed++;
                        }
                    } else if(spot == '#') {
                        let adjacent = this.getSeen(y, x, grid);
                        if(adjacent.filter(a => a == '#').length >= 5) {
                            copy[y][x] = 'L';
                            changed++;
                        }
                    }
                }
            }
            grid = JSON.parse(JSON.stringify(copy));
            if(changed == 0)
                break;
            changed = 0;
        }
        let occupied = 0;
        for(let y = 0; y < grid.length; y++)
            for(let x = 0; x < grid[0].length; x++)
                if(grid[y][x] == '#') occupied++;
        console.log('Answer for part 2: '+occupied);
    },

};