module.exports = {

    part1: function(contents, spl) {
        this.decode(spl);
    },

    part2: function(contents, spl) {},

    decode: function(spl) {

        var total = 0;
        var part2 = 0;

        for (const line of spl) {
            if (line == '') continue;

            var startHypernet = line.indexOf('[');
            var endHypernet = line.indexOf(']');

            var startLooking = false;

            var valid = false;
            var withinHypernet = false;
            var checkingHypernet = false;

            var abas = [];
            var babs = [];

            for (var i = 0; i < line.length; i++) {
                var letter = line.charAt(i);
                if (letter == '[') {
                    checkingHypernet = true;
                    startLooking = false;
                } else if (letter == ']') {
                    checkingHypernet = false;
                    startLooking = false;
                }
                if (startLooking && (i + 1 == line.length || letter != line.charAt(i + 1))) startLooking = false;
                else if (startLooking) {
                    if (checkingHypernet) withinHypernet = true;
                    else valid = true;
                }
                if (checkingHypernet) {
                    if (i + 2 < line.length) {
                        if (letter == line.charAt(i + 2) && (letter != line.charAt(i + 1) && line.charAt(i + 1) != ']' && line.charAt(i + 1) != '[')) {
                            babs.push([
                                [letter, line.charAt(i + 1), letter].join('')
                            ]);
                        }
                    }
                } else {
                    if (i + 2 < line.length) {
                        if (letter == line.charAt(i + 2) && (letter != line.charAt(i + 1) && line.charAt(i + 1) != ']' && line.charAt(i + 1) != '[')) {
                            abas.push([
                                [letter, line.charAt(i + 1), letter].join('')
                            ]);
                        }
                    }
                }
                if (i + 3 >= line.length) continue;
                if (letter == line.charAt(i + 3) && letter != line.charAt(i + 1)) startLooking = true;
            }
            if (valid && !withinHypernet)
                total++;

            for (var aba of abas) {
                aba = aba[0];
                var revSeq = [aba.charAt(1), aba.charAt(0), aba.charAt(1)].join('');
                if (babs.findIndex(function(x) {
                        return x[0] == this;
                    }, revSeq) != -1) {
                    console.log(line + ' is valid for part 2');
                    console.log(revSeq + ' matches ' + aba);
                    part2++;
                }
            }
        }
        //'mgfmdcxibcgzhrfmm[mzvyabccrdzlaiij]arnetejwseofkwqvxi[fylixbrjhxdfhiewbnb]wvndnswxdnbcktp[tetomqdkfmcndddruy]biuxgrvctlbbrqmxjp'
        console.log('Answer for part 1: ' + total);
        console.log('Answer for part 2: ' + part2);
    }

};