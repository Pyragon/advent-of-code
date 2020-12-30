module.exports = {

    part1: function(contents, split) {
        split = split.map(Number);
        let preambleLength = 25;
        let index = preambleLength;
        wh: while(true) {
            for(let i = (index-preambleLength); i < index-1; i++) {
                for(let k = i+1; k < index; k++) {
                    if(split[i]+split[k] == split[index]) {
                        index++;
                        continue wh;
                    }
                }
            }
            console.log('Answer for part 1: '+split[index]);
            break;
        }
    },

    part2: function(contents, split) {
        split = split.map(Number);
        let preambleLength = 25;
        let index = preambleLength;
        let answer;
        wh: while(true) {
            for(let i = (index-preambleLength); i < index-1; i++) {
                for(let k = i+1; k < index; k++) {
                    if(split[i]+split[k] == split[index]) {
                        index++;
                        continue wh;
                    }
                }
            }
            answer = split[index];
            break;
        }
        let answers;
        sp: for(let i = 0; i < index-1; i++) {
            answers = [ split[i] ];
            let total = split[i];
            for(let k = i+1; k < index; k++) {
                total += split[k];
                answers.push(split[k]);
                if(total > answer) continue sp;
                if(total == answer) break sp;
            }
        }
        let lowest = Math.min.apply(null, answers);
        let highest = Math.max.apply(null, answers);
        console.log('Answer for part 2: '+(lowest+highest));
    },

};