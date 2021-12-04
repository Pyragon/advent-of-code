module.exports = {

    part1: function(contents, split) {
        let valid = 0;
        for (let line of split) {
            let group = line.match(/(\d+)-(\d+) (.*?): (.*)/);
            let min = parseInt(group[1]);
            let max = parseInt(group[2]);
            let match = group[3];
            let password = group[4];
            let num = 0;
            for (let char of password.split('')) {
                if (char == match) num++;
            }
            if (num >= min && num <= max) valid++;
        }
        console.log('Answer to part 1: ' + valid);
    },

    part2: function(contents, split) {
        let valid = 0;
        for (let line of split) {
            let group = line.match(/(\d+)-(\d+) (.*?): (.*)/);
            let pos1 = parseInt(group[1]);
            let pos2 = parseInt(group[2]);
            let match = group[3];
            let password = group[4];
            if ((password[pos1] == match && password[pos2] != match) ||
                (password[pos1] != match && password[pos2] == match))
                valid++;
        }
        console.log('Answer to part 2: ' + valid);
    },

};