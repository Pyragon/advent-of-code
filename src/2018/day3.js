module.exports = {

    part1: function(contents, lines) {
        let usedCoords = [
            []
        ];
        for (let line of lines) {
            line = line.split(' ');
            let coords = line[2].split(',');
            let x = coords[0];
            let y = coords[1].replace(':', '');
            coords = line[3].split('x');
            let w = coords[0];
            let h = coords[1];
            for (let i = 0; i < w; i++) {
                if (typeof usedCoords[x + i] === 'undefined') usedCoords[x + i] = [];
                for (let k = 0; k < h; k++) {
                    if (typeof usedCoords[x + i][y + k] === 'undefined') usedCoords[x + i][y + k] = 0;
                    usedCoords[x + i][y + k]++;
                }
            }
        }
        let result = 0;
        for (let x = 0; x < usedCoords.length; x++) {
            if (typeof usedCoords[x] === 'undefined') continue;
            for (let y = 0; y < usedCoords[x].length; y++) {
                if (usedCoords[x][y] >= 2) result++;
            }
        }
        console.log('Part 1: ' + result);
    },

    part2: function(contents, lines) {

    }

};