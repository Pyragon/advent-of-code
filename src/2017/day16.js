let cliProgress = require('cli-progress');

function part1(contents, split) {

    let position = 0;
    let programs = [];
    let letters = 'abcdefghijklmnop';
    for (let i = 0; i < letters.length; i++)
        programs[letters[i]] = {
            letter: letters[i],
            position: position++
        }
    for (let line of contents.trim().split(',')) {

        //strip undefined from programs
        for (let i = 0; i < programs.length; i++) {
            if (programs[i] === undefined) {
                programs.splice(i, 1);
                i--;
            }
        }
        if (line.includes('s')) {
            let spin = parseInt(line.substring(1));
            for (let i = 0; i < spin; i++) {
                //increase all positions by 1
                let highestPos = 0;
                let highest = null;
                let keys = Object.keys(programs);
                for (let i = 0; i < keys.length; i++) {
                    let program = programs[keys[i]];
                    if (program.position > highestPos) {
                        highestPos = program.position;
                        highest = program;
                    }
                    program.position++;
                }
                highest.position = 0;
            }
        } else if (line.includes('x')) {
            let parts = line.split('/');
            let posA = parseInt(parts[0].substring(1));
            let posB = parseInt(parts[1]);
            let a, b;
            //idk why the heck sorting normally isn't working
            let keys = Object.keys(programs);
            for (let i = 0; i < keys.length; i++) {
                let program = programs[keys[i]];
                if (program.position === posA)
                    a = program;
                if (program.position === posB)
                    b = program;
            }
            if (!a || !b) {
                console.error(programs);
                throw new Error('Could not find ' + posA + ' or ' + posB);
            }
            a.position = posB;
            b.position = posA;
        } else if (line.includes('p')) {
            let parts = line.split('/');
            let a = programs[parts[0].substring(1)];
            let b = programs[parts[1]];
            let temp = a.position;
            a.position = b.position;
            b.position = temp;
        }
    }
    let ordered = Object.keys(programs).sort((a, b) => programs[a].position - programs[b].position);
    console.log('Answer to part 1: ' + ordered.join(''));
}

function part2(contents, split) {

    let position = 0;
    let programs = [];
    let letters = 'abcdefghijklmnop';
    for (let i = 0; i < letters.length; i++)
        programs[letters[i]] = {
            letter: letters[i],
            position: position++
        }
    for (let line of contents.trim().split(',')) {

        //strip undefined from programs
        for (let i = 0; i < programs.length; i++) {
            if (programs[i] === undefined) {
                programs.splice(i, 1);
                i--;
            }
        }
        if (line.includes('s')) {
            let spin = parseInt(line.substring(1));
            for (let i = 0; i < spin; i++) {
                //increase all positions by 1
                let highestPos = 0;
                let highest = null;
                let keys = Object.keys(programs);
                for (let i = 0; i < keys.length; i++) {
                    let program = programs[keys[i]];
                    if (program.position > highestPos) {
                        highestPos = program.position;
                        highest = program;
                    }
                    program.position++;
                }
                highest.position = 0;
            }
        } else if (line.includes('x')) {
            let parts = line.split('/');
            let posA = parseInt(parts[0].substring(1));
            let posB = parseInt(parts[1]);
            let a, b;
            //idk why the heck sorting normally isn't working
            let keys = Object.keys(programs);
            for (let i = 0; i < keys.length; i++) {
                let program = programs[keys[i]];
                if (program.position === posA)
                    a = program;
                if (program.position === posB)
                    b = program;
            }
            if (!a || !b) {
                console.error(programs);
                throw new Error('Could not find ' + posA + ' or ' + posB);
            }
            a.position = posB;
            b.position = posA;
        } else if (line.includes('p')) {
            let parts = line.split('/');
            let a = programs[parts[0].substring(1)];
            let b = programs[parts[1]];
            let temp = a.position;
            a.position = b.position;
            b.position = temp;
        }
    }
    //get difference in positions from original
    //multiply differences by 1billion
    //get modulo positions

    let ordered = Object.keys(programs).sort((a, b) => programs[a].position - programs[b].position);
    console.log('Answer to part 2: ' + ordered.join(''));
}

module.exports = { part1, part2 };