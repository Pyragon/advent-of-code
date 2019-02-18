module.exports = {

    part1: function(contents, lines) {

        var times2 = 0;
        var times3 = 0;
        for (var line of lines) {

            var count = {};
            for (var char of line.split('')) {
                if (typeof count[char] === 'undefined')
                    count[char] = 0;
                count[char] += 1;
            }
            var has2 = false;
            var has3 = false;
            for (var key of Object.keys(count)) {
                if (count[key] == 2 && !has2) {
                    times2++;
                    has2 = true;
                } else if (count[key] == 3 && !has3) {
                    times3++;
                    has3 = true;
                }
            }
        }
        console.log('Part 1: ' + (times2 * times3));
    },

    part2: function(contents, lines) {
        for (var i = 0; i < lines.length; i++) {
            for (var k = i + 1; k < lines.length; k++) {
                var different = [];
                var curr = lines[i];
                var test = lines[k];
                for (var j = 0; j < curr.length; j++)
                    if (curr[j] != test[j]) different[j] = 1;
                if (Object.keys(different).length == 1) {
                    var result = curr.split('');
                    result.splice(Object.keys(different)[0], 1);
                    console.log('Part 2: ' + result.join(''));
                    return true;
                }
            }
        }
    }

}