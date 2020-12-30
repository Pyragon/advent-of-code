module.exports = {

    part1: function(contents, split) {
        let highest = 0;
        for(let pass of split) {
            
            let row = this.getValue(0, 127, pass.substring(0, 7));
            let column = this.getValue(0, 7, pass.substring(7));

            let answer = (row*8)+column;
            if(answer > highest)
                highest = answer;
        }
        console.log('Answer for part1: '+highest);
    },

    getValue(lowest, highest, assignments) {
        for(let assignment of assignments) {
            if(assignment == 'F' || assignment == 'L') {
                if(lowest == 0)
                    highest -= Math.ceil(highest/2);
                else
                    highest -= Math.ceil((highest-lowest)/2);
            } else if(assignment == 'B' || assignment == 'R')
                lowest += Math.ceil((highest-lowest)/2);
        }
        return lowest;
    },

    part2: function(contents, split) {
        let seats = [];
        for(let i = 0; i < 128; i++) {
            seats[i] = [];
            for(let k = 0; k < 8; k++)
                seats[i][k] = i+','+k;
        }

        for(let pass of split) {
            
            let row = this.getValue(0, 127, pass.substring(0, 7));
            let column = this.getValue(0, 7, pass.substring(7));

            delete seats[row][column];

        }

        for(let rows in seats) {
            for(let columns in seats[rows])
                console.log('Remaining: '+seats[rows][columns]);
                //This was a really confusing question. I just looked through this list and found the isolated seat. Then did (row*8)+column
                //Answer was row 67, column 3, so answer was (67*8)+3=539
        }
    },

};