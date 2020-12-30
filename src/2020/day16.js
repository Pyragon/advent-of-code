let chalk = require('chalk');
let _ = require('underscore');

module.exports = {

    part1: function (contents, split) {
        let [ fields, ticket, nearby ] = this.parseInput(split);
        let invalid = [];
        for(let ticket of nearby) {
            val: for(let value of ticket) {
                for(let field of fields) {
                    if((value >= field.reqs[0][0] && value <= field.reqs[0][1]) || (value >= field.reqs[1][0] && value <= field.reqs[1][1])) 
                        continue val;
                }
                invalid.push(value);
            }
        }
        console.log('Answer to part 1: '+(invalid.reduce((t, a) => t+a)));
    },

    parseInput(split) {
        let fields = [];
        let ticket = [];
        let nearby = [];
        let type = 'fields';
        for(let i = 0; i < split.length; i++) {
            let line = split[i];
            if(line == '') {
                type = type == 'fields' ? 'ticket' : 'nearby';
                continue;
            }
            if(type == 'fields') {
                let match = line.match(/(.*) (\d+)\-(\d+) or (\d+)\-(\d+)/);
                let field = match[1].replace(':', '');
                let reqs = [ [ parseInt(match[2]), parseInt(match[3]) ], [ parseInt(match[4]), parseInt(match[5]) ] ];
                fields.push({
                    field,
                    reqs
                });
            } else if(type == 'ticket') {
                if(line.includes('your')) continue;
                ticket = line.split(',').map(Number);
            } else {
                if(line.includes('nearby')) continue;
                nearby.push(line.split(',').map(Number));
            }
        }
        return [ fields, ticket, nearby ];
    },

    part2: function (contents, split) {
        let [ fields, ticket, nearby ] = this.parseInput(split);
        let tickets = [];
        for(let i = 0; i < nearby.length; i++)
            tickets[i] = nearby[i];
        for(let i = 0; i < tickets.length; i++) {
            let ticket = tickets[i];
            val:for(let value of ticket) {
                    for(let field of fields) {
                        if((value >= field.reqs[0][0] && value <= field.reqs[0][1]) || (value >= field.reqs[1][0] && value <= field.reqs[1][1]))
                            continue val;
                }
                delete tickets[i];
            }
        }
        let found = [];
        w: while(true) {
            fi: for(let field of fields) {
                let possible = [];
                ti: for(let i = 0; i < ticket.length; i++) {
                        if(found[i]) continue;
                        for(let k in tickets) {
                            let near = tickets[k];
                            if(!(near[i] >= field.reqs[0][0] && near[i] <= field.reqs[0][1]) && !(near[i] >= field.reqs[1][0] && near[i] <= field.reqs[1][1]))
                                continue ti;
                        }
                        field.value = ticket[i];
                        field.index = i;
                        possible.push(JSON.parse(JSON.stringify(field)));
                    }
                    if(possible.length == 1) {
                        let f = possible[0];
                        found[f.index] = f;
                    }
            }
            if(Object.keys(found).length == fields.length)
                break;
        }
        console.log('Answer to part 2: '+(found.filter(f => f.field.includes('departure')).map(f => f.value).reduce((t, a) => t *= a)));
    },

};