module.exports = {

    part1: function(contents, split) {
        //get ready for some hella recursion
        let bags = [];
        for(let line of split) {
            let name = line.substring(0, line.indexOf(' contain'));
            name = name.replace('bags', 'bag');
            let reqs = line.substring(line.indexOf('contain ')+8).split(', ');
            reqs[reqs.length-1] = reqs[reqs.length-1].replace('.','');
            let bag = { name, reqs: [] };
            if(reqs[0] == 'no other bags') {
                bags[name] = bag;
                continue;
            }
            for(let req of reqs) {
                let match = req.match(/(\d+) (.*)/);
                bag.reqs.push({
                    name: match[2].replace('bags', 'bag'),
                    amount: parseInt(match[1])
                });
            }
            bags[name] = bag;
        }
        let total = 0;
        for(let bag in bags) {
            if(this.canHoldBag('shiny gold bag', bags[bag], bags))
                total++;
        }
        console.log('Answer for part 1: '+total);
    },

    canHoldBag(bagName, bag, bags) {
        for(let req of bag.reqs) {
            if(req.name == 'shiny gold bag')
                return true;
            if(this.canHoldBag(bagName, bags[req.name], bags))
                return true;
        }
        return false;
    },

    countBags(bag, bags) {
        let total = 1;
        for(let req of bag.reqs)
            total += this.countBags(bags[req.name], bags)*req.amount;
        return total;
    },

    part2: function(contents, split) {
        let bags = [];
        for(let line of split) {
            let name = line.substring(0, line.indexOf(' contain'));
            name = name.replace('bags', 'bag');
            let reqs = line.substring(line.indexOf('contain ')+8).split(', ');
            reqs[reqs.length-1] = reqs[reqs.length-1].replace('.','');
            let bag = { name, reqs: [] };
            if(reqs[0] == 'no other bags') {
                bags[name] = bag;
                continue;
            }
            for(let req of reqs) {
                let match = req.match(/(\d+) (.*)/);
                bag.reqs.push({
                    name: match[2].replace('bags', 'bag'),
                    amount: parseInt(match[1])
                });
            }
            bags[name] = bag;
        }
        console.log('Answer to part 2: '+(this.countBags(bags['shiny gold bag'], bags)-1));
    },

};