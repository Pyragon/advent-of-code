module.exports = {

    part1: function(contents, split) {
        let results = 0;

        split = split.map(Number);

        for (let i = 1; i < split.length; i++) {

            let next = split[i];
            let prev = split[i - 1];

            if (next > prev) {
                results++;
            }

        }
        console.log('Part 1 answer: ' + results);
    },

    part2: function(contents, split) {
        let results = 0;
        split = split.map(Number);
        for (let i = 2; i < split.length; i++) {


            let sum = split[i] + split[i - 1] + split[i - 2];

            let sum2 = split[i + 1] + split[i] + split[i - 1];

            if (sum2 > sum) {
                results++;
            }

        }
        console.log('Part 2 answer: ' + results);
    },

}