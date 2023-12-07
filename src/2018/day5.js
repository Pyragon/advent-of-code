const { minBy } = require('lodash');

const peek = stack => stack[stack.length - 1]

const factorPolymer = input => {
    const stack = []

    input.split('').forEach(char => {
        // XOR of A and a, B and b, etc is 32
        if (!stack.length || (peek(stack).charCodeAt() ^ char.charCodeAt()) !== 32) {
            stack.push(char)
        } else {
            stack.pop()
        }
    })

    return stack.join('')
}

function part1(contents, split) {
    console.log('Answer to part 1: ' + factorPolymer(contents).length);
    // let letters = contents.trim().split('');
    // while (true) {
    //     let changed = false;
    //     for (let i = 0; i < letters.length - 1; i++) {
    //         let a = letters[i];
    //         let b = letters[i + 1];
    //         if (a.toLowerCase() === b.toLowerCase() && a !== b) {
    //             letters.splice(i, 2);
    //             changed = true;
    //             break;
    //         }
    //     }
    //     if (!changed) break;
    // }
    // console.log('Answer to part 1: ' + letters.length);
}

let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

function part2(contents, split) {
    contents = factorPolymer(contents) // A first factorization pass speeds up the following passes

    const polymers = Array(26) // Indexes 0-26 represent 65-91 ASCII codes
        .fill()
        .map((e, i) => {
            const re = new RegExp(String.fromCharCode(i + 65), 'gi')
            const strippedInput = contents.replace(re, '')
            return factorPolymer(strippedInput)
        })

    console.log('Answer to part 2: ' + minBy(polymers, 'length').length);
    // let scores = {};
    // for (let alpha of alphabet) {
    //     let letters = contents.trim().split('');
    //     while (true) {
    //         let changed = false;
    //         for (let i = 0; i < letters.length - 1; i++) {
    //             for (let j = 1; j < letters.length; j++) {
    //                 let a = letters[i];
    //                 let b = letters[j];
    //                 if (a.toLowerCase() == alpha && b.toLowerCase() == alpha && a != b) {
    //                     letters.splice(i, 1);
    //                     letters.splice(j - 1, 1);
    //                     changed = true;
    //                     break;
    //                 }
    //             }
    //         }
    //         if (!changed) break;
    //     }
    //     scores[alpha] = letters;
    // }
    // for (let score of Object.values(scores)) {
    //     while (true) {
    //         let changed = false;
    //         for (let i = 0; i < score.length - 1; i++) {
    //             let a = score[i];
    //             let b = score[i + 1];
    //             if (a.toLowerCase() === b.toLowerCase() && a !== b) {
    //                 score.splice(i, 2);
    //                 changed = true;
    //                 break;
    //             }
    //         }
    //         if (!changed) break;
    //     }
    // }
    // console.log('Answer to part 2: ' + Math.min(...Object.values(scores).map(x => x.length)));
}

module.exports = { part1, part2 };