module.exports = {

    part1: function(contents, line) {
        var floor = 0;
        var told = false;
        for (var i = 0; i < contents.length; i++) {
            var step = contents.charAt(i);
            if (step == '(') floor++;
            else if (step == ')') {
                floor--;
                if (floor <= -1 && !told) {
                    told = true;
                    console.log(i + 1);
                }
            }
        }
        console.log(floor);
    },

    part2: function(contents, line) {

    }

}