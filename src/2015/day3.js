module.exports = {

    part1: function(contents, split) {
        let x = 0,
            y = 0;

        let total = 0;

        let visited = {};

        for (let letter of contents.split('')) {

            switch (letter) {

                case '^':
                    y++;
                    break;
                case 'v':
                    y--;
                    break;
                case '<':
                    x--;
                    break;
                case '>':
                    x++;
                    break;
            }
            visited[x + ',' + y] = true;

        }
        for (let coord in visited) {
            total++;
        }
        console.log('Answer to part 1: ' + total);

    },

    part2: function(contents, split) {

    }

}