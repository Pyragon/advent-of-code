function part1(contents, split) {
    contents = parseInt(contents);
    let house = 0;
    while (true) {
        house++;
        let presents = 0;
        for (let i = 1; i <= house; i++) {
            if (house % i == 0)
                presents += i * 10;
        }
        if (presents >= contents)
            break;
    }
    console.log('Answer to part 1: ' + house);
}

function part2(contents, split) {
    contents = parseInt(contents);
    let house = 0;
    let elves = [];
    while (true) {
        house++;
        let presents = 0;
        for (let i = 1; i <= house; i++) {
            if (house % i == 0) {
                presents += i * 11;
                elves[i] = (elves[i] || 0) + 1;
                if (elves[i] > 50)
                    presents -= i * 11;
            }
        }
        if (presents >= contents)
            break;
    }
    console.log('Answer to part 2: ' + house);
}

module.exports = { part1, part2 };