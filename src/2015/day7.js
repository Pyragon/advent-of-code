function part1(contents, split) {
    let wires = {};
    let cache = {};
    for(let line of split) {
        let setRegex = /^(\d+|[a-z]+) -> ([a-z]+)$/;
        let andOrRegex = /^([a-z]+|\d+) (AND|OR) ([a-z]+) -> ([a-z]+)$/;
        let shiftRegex = /^([a-z]+) (LSHIFT|RSHIFT) (\d+) -> ([a-z]+)$/;
        let notRegex = /^NOT ([a-z]+) -> ([a-z]+)$/;
        let match = line.match(setRegex);
        if(match)
            wires[match[2]] = {
                op: 'SET',
                args: [ match[1] ]
            };
        match = line.match(andOrRegex);
        if(match)
            wires[match[4]] = {
                op: match[2],
                args: [ match[1], match[3] ]
            };
        match = line.match(shiftRegex);
        if(match)
            wires[match[4]] = {
                op: match[2],
                args: [ match[1], Number(match[3]) ]
            };
        match = line.match(notRegex);
        if(match)
            wires[match[2]] = {
                op: 'NOT',
                args: [ match[1] ]
            };
    }

    function get(x) {
        if (isDigits(x)) return Number(x);
        if (x in cache) return cache[x];
        let wire = wires[x];
        let result;
        switch(wire.op) {
            case 'SET':    result = get(wire.args[0]); break;
            case 'AND':    result = get(wire.args[0]) & get(wire.args[1]); break;
            case 'OR':     result = get(wire.args[0]) | get(wire.args[1]); break;
            case 'NOT':    result = ~get(wire.args[0]); break;
            case 'LSHIFT': result = get(wire.args[0]) << wire.args[1]; break;
            case 'RSHIFT': result = get(wire.args[0]) >> wire.args[1]; break;
        }
        return cache[x] = result & 0xFFFF;
    }

    const isDigits = (str) => /^\d+$/.test(str);

    console.log('Answer to Part 1: '+get('a'));
}

function part2(contents, split) {
    let wires = {};
    let cache = {};
    for(let line of split) {
        let setRegex = /^(\d+|[a-z]+) -> ([a-z]+)$/;
        let andOrRegex = /^([a-z]+|\d+) (AND|OR) ([a-z]+) -> ([a-z]+)$/;
        let shiftRegex = /^([a-z]+) (LSHIFT|RSHIFT) (\d+) -> ([a-z]+)$/;
        let notRegex = /^NOT ([a-z]+) -> ([a-z]+)$/;
        let match = line.match(setRegex);
        if(match)
            wires[match[2]] = {
                op: 'SET',
                args: [ match[1] ]
            };
        match = line.match(andOrRegex);
        if(match)
            wires[match[4]] = {
                op: match[2],
                args: [ match[1], match[3] ]
            };
        match = line.match(shiftRegex);
        if(match)
            wires[match[4]] = {
                op: match[2],
                args: [ match[1], Number(match[3]) ]
            };
        match = line.match(notRegex);
        if(match)
            wires[match[2]] = {
                op: 'NOT',
                args: [ match[1] ]
            };
    }

    function get(x) {
        if (isDigits(x)) return Number(x);
        if (x in cache) return cache[x];
        let wire = wires[x];
        let result;
        switch(wire.op) {
            case 'SET':    result = get(wire.args[0]); break;
            case 'AND':    result = get(wire.args[0]) & get(wire.args[1]); break;
            case 'OR':     result = get(wire.args[0]) | get(wire.args[1]); break;
            case 'NOT':    result = ~get(wire.args[0]); break;
            case 'LSHIFT': result = get(wire.args[0]) << wire.args[1]; break;
            case 'RSHIFT': result = get(wire.args[0]) >> wire.args[1]; break;
        }
        return cache[x] = result & 0xFFFF;
    }

    const isDigits = (str) => /^\d+$/.test(str);

    wires['b'] = {
        op: 'SET',
        args: [ get('a') ]
    }

    cache = {};

    console.log('Answer to Part 2: '+get('a'));
}

module.exports = { part1, part2 };