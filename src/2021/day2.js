module.exports = {

    part1: function(contents, split) {
        let position = 0,
            depth = 0;

        for (let line of split) {
            let spl = line.split(' ');
            let command = spl[0];
            let value = parseInt(spl[1]);

            if (command === 'forward')
                position += value;
            else if (command === 'up')
                depth -= value;
            else if (command === 'down')
                depth += value;
        }

        console.log('Answer to part 1: ' + (depth * position));
    },

    part2: function(contents, split) {
        let position = 0,
            depth = 0,
            aim = 0;

        for (let line of split) {
            let spl = line.split(' ');
            let command = spl[0];
            let value = parseInt(spl[1]);

            if (command === 'forward') {
                position += value;
                depth += (aim * value);
            } else if (command === 'up')
                aim -= value;
            else if (command === 'down')
                aim += value;
        }

        console.log('Answer to part 2: ' + (depth * position));
    }

}