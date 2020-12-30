module.exports = {

    part1: function(contents, split) {
        let grid = [];
        let gridX = 0;
        let toAddOn = 0;
        while(toAddOn++ < split.length+1) {
            for(let y = 0; y < split.length; y++) {
                for(let x = 0; x < split[y].length; x++) {
                    if(!grid[y]) grid[y] = [];
                    grid[y][x+gridX] = split[y][x] == '#';
                }
            }
            gridX += split[0].length;
        }
        let x = 0;
        let y = 0;
        let encountered = 0;
        while(y < grid.length-1) {
            x += 3;
            y += 1;
            if(grid[y][x] == true)
                encountered++;
        }
        console.log('Part 1 answer: '+encountered);
    },

    part2: function(contents, split) {
        let slopes = [ [ 1, 1 ], [ 3, 1 ], [ 5, 1 ], [ 7, 1 ], [ 1, 2 ] ];
        let grid = [];
        let gridX = 0;
        let toAddOn = 0;
        while(toAddOn++ < split.length+1) {
            for(let y = 0; y < split.length; y++) {
                for(let x = 0; x < split[y].length; x++) {
                    if(!grid[y]) grid[y] = [];
                    grid[y][x+gridX] = split[y][x] == '#';
                }
            }
            gridX += split[0].length;
        }
        let value = 0;
        for(let slope of slopes) {
            let xSlope = slope[0];
            let ySlope = slope[1];
            let x = 0;
            let y = 0;
            let encountered = 0;
            while(y < grid.length-1) {
                x += xSlope;
                y += ySlope;
                if(grid[y][x] == true)
                    encountered++;
            }
            if(value == 0) value = encountered;
            else value *= encountered;
        }
        console.log('Part 2 answer: '+value);
    },

};