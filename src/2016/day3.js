module.exports = {

    part1: function(contents, spl) {

        var possible = 0;

        for (const line of spl) {

            var sides = line.trim().split(/\s+/).map(side => +side);

            if (sides.length == 1) continue;

            var side0 = parseInt(sides[0]);
            var side1 = parseInt(sides[1]);
            var side2 = parseInt(sides[2]);

            if (this.testTriangle(sides))
                possible++;
        }

        console.log('Answer for part 1: ' + possible);

    },

    part2: function(contents, spl) {

        var possible = 0;

        var columns = [];

        var index = 0;

        for (const line of spl) {

            var sides = line.trim().split(/\s+/).map(side => +side);

            if (sides.length == 1) continue;

            var side0 = parseInt(sides[0]);
            var side1 = parseInt(sides[1]);
            var side2 = parseInt(sides[2]);

            if (columns[0] === undefined) {
                columns[0] = [];
                columns[1] = [];
                columns[2] = [];
            }

            columns[0][index] = side0;
            columns[1][index] = side1;
            columns[2][index] = side2;
            index++;
            if (index == 3) {
                for (var i = 0; i < 3; i++) {
                    sides = columns[i];
                    if (this.testTriangle(sides)) possible++;
                }
                index = 0;
            }
        }

        console.log('Answer for part 2: ' + possible);
    },

    testTriangle: function(sides) {
        var side0 = parseInt(sides[0]);
        var side1 = parseInt(sides[1]);
        var side2 = parseInt(sides[2]);

        if ((side0 + side1 > side2) && (side0 + side2 > side1) && (side1 + side2 > side0))
            return true;
        return false;
    }

};