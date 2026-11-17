function part1(contents, split) {
    let code = 0;
    let memory = 0;
    for(let line of split) {
        code += line.length;
        let chars = line.split('').slice(1, -1);
        for(let i = 0; i < chars.length; i++) {
            let c = chars[i];
            if(/[a-zA-Z]/.test(c)) memory++;
            if(c == '\\') {
                if(chars[++i] == 'x') {
                    memory++;
                    i += 2;
                } else memory++;
            }
        }
    }
    console.log('Answer to Part 1: '+(code - memory));
}

function part2(contents, split) {
    let code = 0;
    let memory = 0;
    for(let line of split) {
        let mem = 0;
        code += line.length;
        let chars = line.split('');
        for(let i = 0; i < chars.length; i++) {
            let c = chars[i];
            if(/[a-zA-Z0-9]/.test(c)) mem++;
            if(c == '\"') mem += 2;
            if(c == '\\') mem += 2;
        }
        mem += 2;
        memory += mem;
    }
    
    console.log('Answer to Part 2: '+(memory - code));
}

module.exports = { part1, part2 };