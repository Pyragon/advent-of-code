function part1(contents, split) {
    let count = 0;
    g: for (let game of split) {
        let id = parseInt(game.match(/Game (\d+)/)[1]);
        let subsets = game.substring(game.indexOf(':') + 1).split(';');
        for (let subset of subsets) {
            let cubes = subset.split(', ');
            for (let cube of cubes) {
                let match = cube.match(/(\d+) (blue|green|red)/);
                let amount = parseInt(match[1]);
                let color = match[2];
                if ((color == 'red' && amount > 12) || (color == 'green' && amount > 13) || (color == 'blue' && amount > 14))
                    continue g;
            }
        }
        count += id;
    }
    console.log('Answer to part 1:', count);
}

function part2(contents, split) {
    let count = 0;
    g: for (let game of split) {
        let id = parseInt(game.match(/Game (\d+)/)[1]);
        let subsets = game.substring(game.indexOf(':') + 1).split(';');
        let lowest = [];
        for (let subset of subsets) {
            let cubes = subset.split(', ');
            for (let cube of cubes) {
                let match = cube.match(/(\d+) (blue|green|red)/);
                let amount = parseInt(match[1]);
                let color = match[2];
                if (!lowest[color])
                    lowest[color] = 0;
                if (amount > lowest[color])
                    lowest[color] = amount;
            }
        }
        count += (lowest['red'] * lowest['green'] * lowest['blue']);
    }
    console.log('Answer to part 2:', count);
}

module.exports = { part1, part2 };