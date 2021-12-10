function part1(contents, split) {
    let replacements = [];
    let molecule;
    let possibilities = {};
    for (let i = 0; i < split.length; i++) {
        if (split[i] == '') continue;
        if (i == split.length - 1)
            molecule = split[i];
        else {
            let replacement = split[i].split(' => ');
            replacements.push({
                from: replacement[0],
                to: replacement[1]
            });
        }
    }
    for (let j = 0; j < molecule.length; j++) {
        for (let i = 1; i < molecule.length; i++) {
            for (let r = 0; r < replacements.length; r++) {
                let replacement = replacements[r];
                if (molecule.substring(j, i) == replacement.from) {
                    let newMolecule = molecule.substring(0, j) + replacement.to + molecule.substring(i);
                    if (!possibilities[newMolecule]) {
                        possibilities[newMolecule] = true;
                    }
                }
            }
        }
    }
    console.log('Answer to part 1: ' + Object.keys(possibilities).length);
}

function part2(contents, split) {

}

module.exports = { part1, part2 };