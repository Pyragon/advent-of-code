module.exports = {

    part1: function(contents, spl) {

        this.decode(spl);
    },

    part2: function(contents, spl) {
        this.decode(spl, false);
    },

    decode: function(spl, part1 = true) {
        var columns = [];

        var letters = [];

        for (const line of spl) {
            if (line == '') continue;

            for (var i = 0; i < line.length; i++) {
                if (!columns[i]) columns[i] = [];
                var letter = line.charAt(i);

                var index = columns[i].findIndex(function(x) {
                    return x.letter == this;
                }, letter);
                if (index == -1) columns[i].push({
                    letter,
                    count: 1
                });
                else {
                    var bef = columns[i][index];
                    columns[i][index] = {
                        letter,
                        count: bef.count + 1
                    };
                }
            }
        }
        for (var k = 0; k < columns.length; k++) {
            columns[k].sort((a, b) => {
                if (a.count > b.count) return part1 ? -1 : 1;
                return part1 ? 1 : -1;
            });
            letters.push(columns[k][0].letter);
        }
        console.log(letters.join(''));
    }

};