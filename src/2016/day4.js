module.exports = {

    part1: function(contents, spl) {

        var sum = 0;

        this.valid = {};

        for (const room of spl) {

            if (room == '') continue;

            var checksum = room.match(/(?<=\[)(.*)(?=\])/)[0]; //jshint ignore:line
            var sectorId = room.match(/[0123456789]+/g)[0];
            var name = room.replace(`-${sectorId}[${checksum}]`, '');

            var chkName = name.replace(/-/g, '');

            var letters = [];

            for (var i = 0; i < chkName.length; i++) {
                var letter = chkName.charAt(i);

                var index = letters.findIndex(function(x) {
                    return x.letter == this;
                }, letter);

                if (index == -1) letters.push({
                    letter,
                    count: 1
                });
                else {
                    var bef = letters[index];
                    letters[index] = {
                        letter,
                        count: bef.count + 1
                    };
                }
            }

            letters.sort((a, b) => {
                if (a.count > b.count) return -1;
                if (a.count < b.count) return 1;
                if (a.letter > b.letter) return 1;
                if (a.letter < b.letter) return -1;
            });
            if (letters.map(x => x.letter).splice(0, 5).join('') == checksum) {
                sum += parseInt(sectorId);
                this.valid[sectorId] = name;
            }
        }
        console.log('Part 1 ansewr: ' + sum);

    },

    part2: function(contents, spl) {

        const alphabet = "abcdefghijklmnopqrstuvwxyz";

        for (const sectorId in this.valid) {
            const name = this.valid[sectorId];
            var newName = "";
            for (var i = 0; i < name.length; i++) {
                var letter = name.charAt(i);
                if (letter == '-') newName += " ";
                else {
                    index = (alphabet.indexOf(letter) + parseInt(sectorId)) % 26;
                    newName += alphabet[index];
                }
            }
            if (newName.includes('northpole object storage')) console.log('Part 2 answer: ' + sectorId);
        }

    }

};