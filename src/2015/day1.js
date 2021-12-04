module.exports = {

    part1: function(contents, split) {

        let floor = 0;

        let values = contents.split('');
        for (let value of values) {
            if (value == '(')
                floor++;

            if (value == ')')
                floor--;
        }

        console.log('Answer to part 1: ' + floor);

    },

    part2: function(contents, split) {

        let floor = 0;

        let values = contents.split('');
        for (let i = 0; i < values.length; i++) {
            let value = values[i];
            if (value == '(')
                floor++;

            if (value == ')')
                floor--;

            if (floor < 0) {
                console.log('Answer to part 2: ' + (i + 1));
                break;
            }
        }
    },

};