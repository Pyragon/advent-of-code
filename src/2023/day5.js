function part1(contents, split) {
    let seeds = [];
    seeds = split[0].split('seeds: ')[1].split(' ').map(Number);
    let index = 1;
    let lastMap = '';
    let changed = [];
    while (index < split.length) {
        let line = split[index++];
        if (line == '') continue;
        if (line.includes('map')) {
            lastMap = line;
            changed = [];
            continue;
        }
        let [to, from, length] = line.split(' ').map(Number);
        for (let i = 0; i < seeds.length; i++) {
            if (changed[i]) continue;
            if (seeds[i] < from || seeds[i] >= from + length) continue;
            let a = seeds[i] - from;
            let b = to + a;
            // console.log('Changing', seeds[i], 'to', b, 'because of', lastMap);
            seeds[i] = b;
            changed[i] = true;
        }
    }
    console.log('Answer to part 1:', Math.min(...seeds));
}

function part2(contents, split) {

}

module.exports = { part1, part2 };