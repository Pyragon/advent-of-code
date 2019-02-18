module.exports = {
    part1: function(contents, lines) {
        var double = [];
        var frequency = 0;
        var spotted = false;
        for (var str of lines) {
            frequency += parseInt(str.replace('+', ''));
            if (double[frequency]) {
                if (!spotted) {
                    console.log('Part 2: ' + frequency);
                    spotted = true;
                }
            }
            double[frequency] = true;
        }
        console.log('Part 1: ' + parseInt(frequency));
    },

    part2: function(contents, lines) {
        var double = [];
        var frequency = 0;
        var spotted = false;
        var index = 0;
        while (!spotted) {
            var str = lines[index++];
            frequency += parseInt(str.replace('+', ''));
            if (double[frequency]) {
                if (!spotted) {
                    console.log('Part 2: ' + frequency);
                    spotted = true;
                }
            }
            double[frequency] = true;
            if (index == lines.length)
                index = 0;
        }
    }
}