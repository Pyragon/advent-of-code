function part1(contents, split) {

    let length = 272;
    let data = contents.trim();
    while (data.length < length)
        data = scramble(data);
    data = data.split('').slice(0, length).join('');
    let _checksum = checksum(data);
    while (_checksum.length % 2 == 0)
        _checksum = checksum(_checksum);
    console.log('Answer to part 1: ' + _checksum.join(''));
}

function checksum(data) {
    let checksum = [];
    for (let i = 0; i < data.length; i += 2) {
        let first = data[i];
        let second = data[i + 1];
        if (parseInt(first) == parseInt(second)) checksum.push(1);
        else checksum.push(0);
    }
    return checksum;
}

function scramble(data) {
    let copy = data.split('').reverse();
    for (let i = 0; i < copy.length; i++) {
        if (copy[i] == '1')
            copy[i] = '0';
        else
            copy[i] = '1';
    }
    data += '0' + copy.join('');
    return data;
}

function part2(contents, split) {

    let length = 35651584;
    let data = contents.trim();
    while (data.length < length)
        data = scramble(data);
    data = data.split('').slice(0, length).join('');
    let _checksum = checksum(data);
    while (_checksum.length % 2 == 0)
        _checksum = checksum(_checksum);
    console.log('Answer to part 2: ' + _checksum.join(''));
}

module.exports = { part1, part2 };