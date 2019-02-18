module.exports = {

    getButton: function(x, y) {
        switch (x) {
            case 0:
                return y == 0 ? 1 : y == 1 ? 4 : 7;
            case 1:
                return y == 0 ? 2 : y == 1 ? 5 : 8;
            case 2:
                return y == 0 ? 3 : y == 1 ? 6 : 9;
        }
    },

    part1: function(contents, spl) {

        var x = 1,
            y = 1;

        var combo = [];

        for (const row of spl) {
            if (row == '') break;
            for (var i = 0; i < row.length; i++) {
                var dir = row.charAt(i);
                var xMove = dir == 'L' ? -1 : dir == 'R' ? 1 : 0;
                var yMove = dir == 'U' ? -1 : dir == 'D' ? 1 : 0;
                if (x + xMove < 0 || x + xMove > 2) continue;
                if (y + yMove < 0 || y + yMove > 2) continue;
                x += xMove;
                y += yMove;
            }
            combo.push(this.getButton(x, y));
        }
        console.log('Part 1 answer: ' + combo.join(''));

    },

    part2: function(contents, spl) {

        var grid = [
            [-1, -1, 1, -1, -1],
            [-1, 2, 3, 4, -1],
            [5, 6, 7, 8, 9],
            [-1, 'A', 'B', 'C', -1],
            [-1, -1, 'D', -1, -1]
        ];

        var combo = [];

        var x = 0,
            y = 2;

        for (const row of spl) {
            if (row == '') break;
            for (var i = 0; i < row.length; i++) {
                var dir = row.charAt(i);
                var xMove = dir == 'L' ? -1 : dir == 'R' ? 1 : 0;
                var yMove = dir == 'U' ? -1 : dir == 'D' ? 1 : 0;
                if (x + xMove < 0 || x + xMove > 4) continue;
                if (y + yMove < 0 || y + yMove > 4) continue;
                var value = grid[y + yMove][x + xMove];
                if (value == -1) continue;
                x += xMove;
                y += yMove;
            }
            combo.push(grid[y][x]);
        }
        console.log('Part 2 answer: ' + combo.join(''));

    }

};