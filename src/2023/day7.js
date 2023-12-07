function part1(contents, split) {
    let hands = [];
    for (let line of split) {
        line = line.split(' ');
        let hand = line[0];
        let bid = parseInt(line[1]);
        let type = getType(hand);
        hands.push({ hand, bid, type });
    }
    let order = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
    hands.sort((a, b) => {
        if (a.type == b.type) {
            for (let i = 0; i < a.hand.length; i++) {
                if (a.hand[i] != b.hand[i])
                    return order.indexOf(a.hand[i]) - order.indexOf(b.hand[i]);
            }
        } else if (a.type == 'fiveOfAKind') return -1;
        else if (b.type == 'fiveOfAKind') return 1;
        else if (a.type == 'fourOfAKind') return -1;
        else if (b.type == 'fourOfAKind') return 1;
        else if (a.type == 'fullHouse') return -1;
        else if (b.type == 'fullHouse') return 1;
        else if (a.type == 'threeOfAKind') return -1;
        else if (b.type == 'threeOfAKind') return 1;
        else if (a.type == 'twoPair') return -1;
        else if (b.type == 'twoPair') return 1;
        else if (a.type == 'onePair') return -1;
        else if (b.type == 'onePair') return 1;
    });
    let rank = 1;
    for (let i = hands.length - 1; i >= 0; i--) {
        hands[i].rank = rank++;
        // console.log(hands[i].hand, hands[i].type, hands[i].rank);
    }
    console.log('Answer to part 1:', hands.reduce((a, b) => a += b.bid * b.rank, 0));
}

function getType(hand, part2) {
    let cards = {};
    for (let card of hand) {
        if (!cards[card]) cards[card] = 0;
        cards[card]++;
    }
    let onePair = false;
    let twoPair = false;
    let fullHouse = false;
    let threeOfAKind = false;
    let fourOfAKind = false;
    let fiveOfAKind = false;
    for (let key of Object.keys(cards)) {
        if (key == 'J' && part2) continue;
        let num = cards[key];
        if (num == 2) {
            if (onePair) twoPair = true;
            if (threeOfAKind) fullHouse = true;
            else onePair = true;
        } else if (num == 3) {
            if (onePair) fullHouse = true;
            else threeOfAKind = true;
        } else if (num == 4)
            fourOfAKind = true;
        else if (num == 5)
            fiveOfAKind = true;
    }
    if (part2) {
        let jokers = cards['J'] || 0;
        switch (jokers) {
            case 5:
                return 'fiveOfAKind';
            case 4:
                return 'fiveOfAKind';
            case 3:
                {
                    if (onePair) return 'fiveOfAKind';
                    return 'fourOfAKind';
                }
            case 2:
                {
                    if (threeOfAKind) return 'fiveOfAKind';
                    if (onePair) return 'fourOfAKind';
                    return 'threeOfAKind';
                }
            case 1:
                {
                    if (fourOfAKind) return 'fiveOfAKind';
                    if (threeOfAKind) return 'fourOfAKind';
                    if (twoPair) return 'fullHouse';
                    if (onePair) return 'threeOfAKind';
                    return 'onePair';
                }
        }
    }
    if (fiveOfAKind) return 'fiveOfAKind';
    if (fourOfAKind) return 'fourOfAKind';
    if (fullHouse) return 'fullHouse';
    if (threeOfAKind) return 'threeOfAKind';
    if (twoPair) return 'twoPair';
    if (onePair) return 'onePair';
    return 'highCard';
}

function part2(_, split) {
    let hands = [];
    for (let line of split) {
        line = line.split(' ');
        let hand = line[0];
        let bid = parseInt(line[1]);
        let type = getType(hand, true);
        hands.push({ hand, bid, type });
    }
    let order = ['A', 'K', 'Q', 'T', '9', '8', '7', '6', '5', '4', '3', '2', 'J'];
    hands.sort((a, b) => {
        if (a.type == b.type) {
            for (let i = 0; i < a.hand.length; i++) {
                if (a.hand[i] != b.hand[i])
                    return order.indexOf(a.hand[i]) - order.indexOf(b.hand[i]);
            }
        } else if (a.type == 'fiveOfAKind') return -1;
        else if (b.type == 'fiveOfAKind') return 1;
        else if (a.type == 'fourOfAKind') return -1;
        else if (b.type == 'fourOfAKind') return 1;
        else if (a.type == 'fullHouse') return -1;
        else if (b.type == 'fullHouse') return 1;
        else if (a.type == 'threeOfAKind') return -1;
        else if (b.type == 'threeOfAKind') return 1;
        else if (a.type == 'twoPair') return -1;
        else if (b.type == 'twoPair') return 1;
        else if (a.type == 'onePair') return -1;
        else if (b.type == 'onePair') return 1;
    });
    let rank = 1;
    for (let i = hands.length - 1; i >= 0; i--) {
        hands[i].rank = rank++;
        console.log(hands[i].hand, hands[i].type, hands[i].rank);
    }
    console.log('Answer to part 2:', hands.reduce((a, b) => a += b.bid * b.rank, 0));
}

module.exports = { part1, part2 };