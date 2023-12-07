function part1() {
    simulate(true);
}

function part2() {
    simulate();
}

function simulate(part1 = false) {
    let costs = [];
    for (let weapon of shop.weapons) {
        for (let armour of shop.armour) {
            for (let i = 0; i < shop.rings.length; i++) {
                for (let j = 0; j < shop.rings.length; j++) {
                    if (i == j) continue;
                    let ring1 = shop.rings[i];
                    let ring2 = shop.rings[j];
                    let boss = {
                        hp: 103,
                        damage: 9,
                        armour: 2
                    }
                    let player = {
                        hp: 100,
                        damage: 0,
                        armour: 0,
                    }
                    let cost = 0;
                    cost += weapon.cost;
                    if (armour.cost)
                        cost += armour.cost;
                    if (ring1.cost)
                        cost += ring1.cost;
                    if (ring2.cost)
                        cost += ring2.cost;
                    player.damage += weapon.damage;
                    if (armour.armour)
                        player.armour += armour.armour;
                    if (ring1.damage)
                        player.damage += ring1.damage;
                    if (ring1.armour)
                        player.armour += ring1.armour;
                    if (ring2.damage)
                        player.damage += ring2.damage;
                    if (ring2.armour)
                        player.armour += ring2.armour;
                    if (simulateGame(player, boss) == (part1 ? 0 : 1))
                        costs.push(cost);
                }
            }
        }
    }
    console.log('Answer to part', part1 ? '1:' : '2:', costs.sort((a, b) => (part1 ? a - b : b - a))[0]);
}

function simulateGame(player, boss) {
    let turn = 0;
    while (true) {
        let attacker = turn == 0 ? player : boss;
        let defender = turn == 0 ? boss : player;
        let damage = attacker.damage - defender.armour;
        defender.hp -= damage;
        if (defender.hp <= 0) break;
        turn = turn == 0 ? 1 : 0;
    }
    return turn;
}

const shop = {
    weapons: [{
        cost: 8,
        damage: 4,
    }, {
        cost: 10,
        damage: 5,
    }, {
        cost: 25,
        damage: 6,
    }, {
        cost: 40,
        damage: 7,
    }, {
        cost: 74,
        damage: 8,
    }],
    armour: [{
        cost: 13,
        armour: 1,
    }, {
        cost: 31,
        armour: 2,
    }, {
        cost: 53,
        armour: 3,
    }, {
        cost: 75,
        armour: 4,
    }, {
        cost: 102,
        armour: 5,
    }, {}],
    rings: [{
        cost: 25,
        damage: 1,
    }, {
        cost: 50,
        damage: 2,
    }, {
        cost: 100,
        damage: 3,
    }, {
        cost: 20,
        armour: 1,
    }, {
        cost: 40,
        armour: 2,
    }, {
        cost: 80,
        armour: 3,
    }, {

    }]
}

module.exports = { part1, part2 };