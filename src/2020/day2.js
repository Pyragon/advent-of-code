module.exports = {

    part1: function(contents, split) {
        let valid = 0;
        for(let line of split) {
            let matches = line.match(/(\d+)\-(\d+) ([a-z]): (.*)/);
            let lowest = parseInt(matches[1]);
            let highest = parseInt(matches[2]);
            let letter = matches[3];
            line = matches[4];
            let occurrances = (line.match(new RegExp(letter, 'g'))||[]).length;
            if(occurrances >= lowest && occurrances <= highest)
                valid++;
        }
        console.log('Answer to part1: '+valid);
    },

    part2: function(contents, split) {
        let valid = 0;
        for(let line of split) {
            let matches = line.match(/(\d+)\-(\d+) ([a-z]): (.*)/);
            let lowest = parseInt(matches[1]);
            let highest = parseInt(matches[2]);
            let letter = matches[3];
            line = matches[4];
            let v = 0;
            if(line[lowest-1] == letter)
                v++;
            if(line[highest-1] == letter)
                v++;
            if(v == 1)
                valid++;
        }
        console.log('Answer to part2: '+valid);
    },

};