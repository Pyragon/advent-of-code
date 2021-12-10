function part1(contents, split) {
    let decompressed = [];
    let index = 0;
    while (index < contents.length) {
        let char = contents[index++];
        //whitespace regex
        let regex = /\s/;
        if (regex.test(char)) continue;
        if (char === '(') {
            let marker = '';
            while ((next = contents[index++]) != ')')
                marker += next;
            let spl = marker.split('x');
            let chars = parseInt(spl[0]);
            let repeat = parseInt(spl[1]);
            let toRepeat = [];
            for (let i = 0; i < chars; i++)
                toRepeat.push(contents[index++]);
            for (let i = 0; i < repeat; i++)
                decompressed.push(...toRepeat);
            continue;
        }
        decompressed.push(char);
    }
    console.log('Answer to part 1: ' + decompressed.length);
}

function part2(file, split) {
    file = file.trim();
    //set length of weighted array and fill with 1's
    let weighted = [];
    let pointer = '';
    let close = '';
    let len2 = 0;
    let mark2 = '';
    let temp2 = '';
    let spot = '';
    weighted.length = file.length;
    weighted.fill(1);
    for (var a = 0; a < file.length; a++) {
        //set current pointer
        pointer = file[a];
        //if pointer isn't an open bracket, add it's value to length counter
        if (pointer !== "(") {
            len2 += weighted[a];
            //else if it is a bracket, find the close bracket, get the marker and split it into two parts
        } else if (pointer === "(") {
            var b = a + 1;
            close = file[b];
            while (close !== ")") {
                b++;
                close = file[b];
            }
            temp2 = file.substring(a + 1, b);
            mark2 = temp2.split("x");
            //spot holds the place for right after close bracket
            spot = b + 1;
            //for number of spots in marker[0], multiply it's weight by number of repetitions
            for (var c = 0; c < Number(mark2[0]); c++) {
                weighted[spot] *= Number(mark2[1]);
                spot++;
            }
            //move a forward to end of marker so it'll increase one more on the next loop and start in the right spot
            a = b;
        }
    }
    console.log('Answer to part 2: ' + len2);
}

module.exports = { part1, part2 };