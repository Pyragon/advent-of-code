module.exports = {

    part1: function(contents, lines) {
        var length = 0;
        for (var line of lines) {
            if (!line.includes('x')) continue;
            var sides = line.trim().split('x');
            sides.map(v => parseInt(v));
            var l = parseInt(sides[0]);
            var w = parseInt(sides[1]);
            var h = parseInt(sides[2]);
            var area = (2 * l * w) + (2 * w * h) + (2 * h * l);
            area += Math.min.apply(null, [l * w, w * h, h * l]);
            length += area;
        }
        console.log(length);
    },

    part2: function(contents, lines) {

    }

}