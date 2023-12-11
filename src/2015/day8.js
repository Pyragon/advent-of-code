function part1(contents, split) {
    let literals = 0;
    let memory = 0;
    for (let line of split) {
        literals += line.length;
        line = line.substring(1, line.length - 1);
        for (let i = 0; i < line.length; i++) {
            let char = line[i];
            //if just regular character, add one to memory
            if (char != '\\') {
                memory++;
                continue;
            }
            let next = line[++i];
            //if not hexadecimal, then add one to memory
            if (next == '\\' || next == '"') {
                memory++;
                continue;
            }
            i += 2;
            memory++;
        }
    }
    console.log('Answer to part 1:', literals - memory);
}

function part2(contents, split) {
    let literals = 0;
    let memory = 0;
    let newEncoded = 0;
    for (let line of split) {
        literals += line.length;
        newEncoded += 4 + line.length;
        line = line.substring(1, line.length - 1);
        for (let i = 0; i < line.length; i++) {
            let char = line[i];
            //if just regular character, add one to memory
            if (char != '\\') {
                memory++;
                continue;
            }
            newEncoded++;
            let next = line[++i];
            //if not hexadecimal, then add one to memory
            if (next == '\\' || next == '"') {
                memory++;
                newEncoded++;
                continue;
            }
            i += 2;
            memory++;
        }
    }
    console.log('Answer to part 2:', newEncoded - literals);
}

module.exports = { part1, part2 };