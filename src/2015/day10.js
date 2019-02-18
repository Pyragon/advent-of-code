var written = require('written-number');

var nums = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9
};

module.exports = {

    part1: function(contents, lines) {
        contents = contents.trim();
        for (var i = 0; i < 40; i++)
            contents = this.changeNums(contents);
        console.log('Part 1 result: ' + contents.length);
    },

    changeNums: function(contents) {
        var count = 0;
        var lastNum = parseInt(contents.charAt(0));
        var result = '';
        var realResult = '';
        for (var i = 0; i < contents.length; i++) {
            var c = contents.charAt(i);
            if (parseInt(c) != lastNum && lastNum != -1) {
                result += written(count) + ',';
                result += written(lastNum) + ',';
                count = 0;
            }
            lastNum = parseInt(c);
            count++;
        }
        result += written(count) + ',';
        result += written(lastNum);
        for (var sp of result.split(','))
            realResult += nums[sp];
        return realResult;
    },

    part2: function(contents, lines) {
        contents = contents.trim();
        for (var i = 0; i < 50; i++)
            contents = this.changeNums(contents);
        console.log('Part 2 result: ' + contents.length);
    }

};