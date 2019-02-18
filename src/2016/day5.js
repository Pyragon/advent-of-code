const md5 = require('md5');

module.exports = {

    part1: function(contents, spl) {

        // contents = 'abc';

        contents = contents.trim();

        var index = 0;

        var pass = [];
        var part2 = [];
        while (pass.length < 8 || Object.keys(part2).length < 8) {
            var hash = md5(contents + index++);
            if (hash.startsWith('00000')) {
                var pos = hash.substr(5, 1);
                if (pass.length < 8)
                    pass.push(pos);
                if (isNaN(pos)) continue;
                pos = parseInt(pos);
                if (pos < 0 || pos > 7 || part2[pos]) continue;
                part2[pos] = hash.substr(6, 1);
            }
        }
        console.log('Answer for part 1: ' + pass.join(''));
        console.log('Answer for part 2: ' + part2.join(''));

    },

    part2: function(contents, spl) {

    }

};