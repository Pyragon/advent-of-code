module.exports = {

    part1: function(contents, split) {
        let groups = [];
        let group = [];
        for(let line of split) {
            if(line == '') {
                groups.push(group);
                group = [];
                continue;
            }
            for(let answer of line) {
                if(group[answer]) continue;
                group[answer] = true;
            }
        }
        groups.push(group);
        console.log(groups.map(g => Object.keys(g).length).reduce((t, i) => t+i));
    },

    part2: function(contents, split) {
        let groups = [];
        let group = [];
        for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++)
            group[i] = true;
        for(let line of split) {
            if(line == '') {
                groups.push(group);
                group = [];
                for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++)
                    group[i] = true;
                continue;
            }
            let alpha = [];
            for(let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++)
                alpha[i] = true;
            for(let answer of line) {
                if(alpha[answer.charCodeAt(0)])
                    delete alpha[answer.charCodeAt(0)];
            }
            for(let remain in alpha) {
                if(group[remain])
                    delete group[remain];
            }
        }
        groups.push(group);
        console.log(groups.map(g => Object.keys(g).length).reduce((t, i) => t+i));
    },

};