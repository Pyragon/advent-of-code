function part1(contents, split) {

    let discs = [];
    for (let line of split) {
        let regex = /Disc #(\d+) has (\d+) positions; at time=0, it is at position (\d+)/;
        let match = regex.exec(line);
        if (!match) {
            throw new Error(`Could not parse line: ${line}`);
        }
        let disc = {
            id: parseInt(match[1]),
            positions: parseInt(match[2]),
            start: parseInt(match[3])
        };
        discs.push(disc);
    }
    loop: for (let i = 0; i < 1000000000; i++) {
        for (let j = 0; j < discs.length; j++) {
            let disc = discs[j];
            let position = (i + disc.start + j) % disc.positions;
            if (position != 0) continue loop;
        }
        console.log('Answer to part 1: ' + (i - 1));
        break;
    }
}

function part2(contents, split) {

    let discs = [];
    for (let line of split) {
        let regex = /Disc #(\d+) has (\d+) positions; at time=0, it is at position (\d+)/;
        let match = regex.exec(line);
        if (!match) {
            throw new Error(`Could not parse line: ${line}`);
        }
        let disc = {
            id: parseInt(match[1]),
            positions: parseInt(match[2]),
            start: parseInt(match[3])
        };
        discs.push(disc);
    }
    discs.push({
        id: discs.length + 1,
        positions: 11,
        start: 0
    });
    let i = 0;
    loop: for (let i = 0; i < 1000000000; i++) {
        for (let j = 0; j < discs.length; j++) {
            let disc = discs[j];
            let position = (i + disc.start + j) % disc.positions;
            if (position != 0) continue loop;
        }
        console.log('Answer to part 1: ' + (i - 1));
        break;
    }
}

module.exports = { part1, part2 };