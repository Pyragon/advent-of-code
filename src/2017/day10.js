function part1(contents, split) {

    //numbers from 0 to 255
    let list = new Array(256).fill(0).map((x, i) => i);

    let pos = 0;
    let skip = 0;

    let lengths = contents.split(',').map(x => parseInt(x));
    for (let length of lengths) {
        let sublist = [];
        for (let i = pos; i < pos + length; i++)
            sublist.push(list[i % list.length]);
        sublist.reverse();
        for (let i = pos; i < pos + length; i++)
            list[i % list.length] = sublist.shift();
        // console.log(list);
        pos += length + skip;
        pos = pos % list.length;
        skip++;
    }
    console.log('Answer to part 1: ' + (list[0] * list[1]));
}

function part2(contents, split) {

    //numbers from 0 to 255
    let list = new Array(256).fill(0).map((x, i) => i);
    let denseHash = [];

    let pos = 0;
    let skip = 0;

    //convert to ascii
    let lengths = contents.trim().split('').map(x => x.charCodeAt(0));
    lengths.push(17, 31, 73, 47, 23);

    for (let i = 0; i < 64; i++) {
        for (let length of lengths) {
            let sublist = [];
            for (let i = pos; i < pos + length; i++)
                sublist.push(list[i % list.length]);
            sublist.reverse();
            for (let i = pos; i < pos + length; i++)
                list[i % list.length] = sublist.shift();
            // console.log(list);
            pos += length + skip;
            pos = pos % list.length;
            skip++;
        }
    }
    for (let i = 0; i < list.length; i += 16)
        denseHash.push(list.slice(i, i + 16).reduce((a, b) => a ^ b));

    let hex = denseHash.map(x => x.toString(16).padStart(2, '0')).join('');

    console.log('Answer to part 2: ' + hex);

}

module.exports = { part1, part2 };