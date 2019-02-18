module.exports = {

    part1: function(contents, lines) {

        this.x = 0;
        this.y = 0;
        this.dir = 0;

        var steps = contents.split(', ');

        for (let step of steps) {
            var turn = step.charAt(0);
            var distance = parseInt(step.substr(1));
            this.move(turn, distance);
        }
        console.log('Part 1 answer: ' + (Math.abs(this.x) + Math.abs(this.y)));

    },

    part2: function(contents, lines) {

        this.x = 0,
            this.y = 0,
            this.dir = 0;

        this.visited = [];

        var steps = contents.split(', ');

        l: for (let step of steps) {
            var turn = step.charAt(0);
            var distance = parseInt(step.substr(1));
            this.getNewDir(turn);
            for (var i = 0; i < distance; i++) {
                if (this.dir == 0) this.y++;
                if (this.dir == 1) this.x++;
                if (this.dir == 2) this.y--;
                if (this.dir == 3) this.x--;
                var filtered = this.visited.filter((coord) => coord.x == this.x && coord.y == this.y);
                if (filtered.length > 0) {
                    console.log('Part 2 answer: ' + (Math.abs(this.x) + Math.abs(this.y)));
                    break l;
                }
                this.visited.push({
                    x: this.x,
                    y: this.y
                });
            }

        }
    },

    move: function(dir, steps) {
        this.getNewDir(dir);
        if (this.dir == 0) this.y += steps;
        if (this.dir == 1) this.x += steps;
        if (this.dir == 2) this.y -= steps;
        if (this.dir == 3) this.x -= steps;
    },

    getNewDir: function(turn) {
        if (turn == 'L') {
            this.dir--;
            if (this.dir < 0) this.dir = 3;
        } else if (turn == 'R') {
            this.dir++;
            if (this.dir > 3) this.dir = 0;
        }
    },

};