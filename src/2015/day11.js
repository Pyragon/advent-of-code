function part1(contents, split) {
    let current = contents.trim();
    console.log('Answer to Part 1: '+getNext(current));
}

function getNext(current) {
    while(true) {
        current = increment(current, current.length-1);
        if(meetsRequirement(current)) break;
    }
    return current;
}

function meetsRequirement(password) {
    let doubles = 0;
    let threeInARow = false;
    let lastDoubleCheck = -1;
    for(let i = 0; i < password.length; i++) {
        if(doubles == 0 && i > password.length-5) continue;
        if(password[i] == password[i+1] && lastDoubleCheck != i) {
            doubles++;
            lastDoubleCheck = i+1;
        }
        if(i > password.length-3) continue;
        let charCode = password.charCodeAt(i);
        if(password.charCodeAt(i + 1) == charCode + 1 && password.charCodeAt(i + 2) == charCode + 2) threeInARow = true;
    }
    return doubles >= 2 && threeInARow;
}

function increment(password, index) {
    let code = password.charCodeAt(index);
    if(code == 122) {
        password = password.slice(0, index) + 'a' + password.slice(index+1);
        if(index == 0) {
            console.log('need to add');
            process.exit(1);
        }
        password = increment(password, index-1);
        return password;
    }
    let change = String.fromCharCode(code+1);
    if(change == 'i' || change == 'o' || change == 'l')
        change = String.fromCharCode(code+2);
    password = password.slice(0, index) + change + password.slice(index + 1);
    return password;
}

function part2(contents, split) {
    let current = contents.trim();
    console.log('Answer to Part 2: '+getNext(getNext(current)));
}

module.exports = { part1, part2 };