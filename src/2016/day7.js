function part1(contents, split) {
    let count = 0;
    lineL: for (let line of split) {
        let outside = [];
        let inside = [];
        let current = '';
        let inBrackets = false;
        for (let i = 0; i < line.length; i++) {
            let char = line[i];
            if (char == '[') {
                inBrackets = true;
                outside.push(current);
                current = '';
            } else if (char == ']') {
                inBrackets = false;
                inside.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        outside.push(current);
        let abbaRegex = /([a-z])([a-z])\2\1/g;
        for (let _inside of inside) {
            let match = abbaRegex.exec(_inside);
            if (!match) continue;
            if (isAbba(match[0])) continue lineL;
        }
        for (let _outside of outside) {
            let match = abbaRegex.exec(_outside);
            if (!match) continue;
            if (isAbba(match[0])) {
                count++;
                continue lineL;
            }
        }
    }
    console.log('Answer to part 1: ' + count);
}

function isAbba(string) {
    return string[0] == string[3] && string[1] == string[2] && string[0] != string[1];
}

function isAba(string) {
    return string[0] == string[2] && string[1] != string[2];
}

function part2(contents, split) {
    let count = 0;
    lineL: for (let line of split) {
        let outside = [];
        let inside = [];
        let current = '';
        let inBrackets = false;
        for (let i = 0; i < line.length; i++) {
            let char = line[i];
            if (char == '[') {
                inBrackets = true;
                outside.push(current);
                current = '';
            } else if (char == ']') {
                inBrackets = false;
                inside.push(current);
                current = '';
            } else {
                current += char;
            }
        }
        outside.push(current);
        for (let i = 0; i < outside.length; i++) {
            let _outside = outside[i];
            for (let j = 0; j < _outside.length - 2; j++) {
                let aba = _outside[j] + _outside[j + 1] + _outside[j + 2];
                if (!isAba(aba)) continue;
                let bab = aba[1] + aba[0] + aba[1];
                for (let _inside of inside) {
                    if (_inside.indexOf(bab) != -1) {
                        count++;
                        continue lineL;
                    }
                }
            }
        }
    }
    console.log('Answer to part 2: ' + count);
}

module.exports = { part1, part2 };