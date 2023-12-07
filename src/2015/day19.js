function part1(contents, split) {
    let replacements = [];

    let molecule = '';
    for (let line of split) {
        if (line == '') continue;
        if (line.includes('=>')) {
            let [from, to] = line.split(' => ');
            replacements.push([from, to]);
        } else
            molecule = line;
    }

    let molecules = new Set();
    for (let [from, to] of replacements) {
        for (let i = 0; i < molecule.length; i++) {
            if (molecule.substr(i, from.length) == from) {
                let newMolecule = molecule.substr(0, i) + to + molecule.substr(i + from.length);
                molecules.add(newMolecule);
            }
        }
    }
    console.log('Answer to part 1: ' + molecules.size);

}

function part2(contents, split) {
    let replacements = [];

    let molecule = '';
    for (let line of split) {
        if (line == '') continue;
        if (line.includes('=>')) {
            let [from, to] = line.split(' => ');
            replacements.push([from, to]);
        } else
            molecule = line;
    }

    let steps = 0;
    while (molecule != 'e') {
        for (let [from, to] of replacements) {
            if (molecule.includes(to)) {
                molecule = molecule.replace(to, from);
                steps++;
                break;
            }
        }
    }
    console.log('Answer to part 2: ' + steps);
}

module.exports = { part1, part2 };