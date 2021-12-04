module.exports = {

    part1: function(contents, split) {

        let total = 0;
        for (let line of split) {

            line = line.split('x').map(Number);
            let l = line[0],
                w = line[1],
                h = line[2];

            let sqF = (2 * l * w) + (2 * w * h) + (2 * h * l);

            let lowest = [(l * w), (w * h), (h * l)].map(Number).sort((a, b) => a - b)[0];

            total += (sqF + lowest);

        }
        console.log('Answer to part 1: ' + total);

    },

    part2: function(contents, split) {

        let total = 0;
        for (let line of split) {

            line = line.split('x').map(Number);
            let l = line[0],
                w = line[1],
                h = line[2];

            console.log(l, w, h);

            let sorted = [l, w, h].sort((a, b) => a - b);

            total += (sorted[0] * 2) + (sorted[1] * 2) + (l * w * h);

        }
        console.log('Answer to part 2: ' + total);
    }

}