module.exports = {

    part1: function(contents, split) {
        for(let i = 0; i < split.length; i++) {
            if(i == split.length-1) break;
            for(let k = i+1; k < split.length; k++) {
                if(parseInt(split[i]) + parseInt(split[k]) == 2020) {
                    console.log('Answer to part1: '+(parseInt(split[i])*parseInt(split[k])));
                    return;
                }
            }
        }
        console.log('Could not find result. Please try again.');
    },

    part2: function(contents, split) {
        for(let i = 0; i < split.length; i++) {
            if(i == split.length-2) break;
            for(let k = i+1; k < split.length; k++) {
                for(let j = k+1; j < split.length; j++) {
                    if(parseInt(split[i]) + parseInt(split[k]) + parseInt(split[j]) == 2020) {
                        console.log('Answer to part2: '+(parseInt(split[i])*parseInt(split[k])*parseInt(split[j])));
                        return;
                    }
                }
            }
        }
        console.log('Could not find result. Please try again.');
    },

};