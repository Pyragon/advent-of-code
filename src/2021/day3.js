module.exports = {

    part1: function(contents, split) {
        let epsilon = [],
            gamma = [];
        for (let i = 0; i < split[0].length; i++) {

            let zeros = 0,
                ones = 0;
            split.forEach(line => {
                if (parseInt(line[i]) === 0)
                    zeros++;
                else
                    ones++;
            });
            if (zeros > ones) {
                epsilon.push(1);
                gamma.push(0);
            } else {
                epsilon.push(0);
                gamma.push(1);
            }

        }
        //convert binary to decimal
        let epsilonDec = 0,
            gammaDec = 0;
        for (let i = 0; i < epsilon.length; i++) {
            epsilonDec += epsilon[i] * Math.pow(2, epsilon.length - i - 1);
            gammaDec += gamma[i] * Math.pow(2, gamma.length - i - 1);
        }
        console.log('Answer to part 1: ' + (gammaDec * epsilonDec));
    },

    part2: function(contents, split) {
        let generator = null,
            scrubber = null;
        let length = split[0].length;
        let splCopy = JSON.parse(JSON.stringify(split));
        for (let i = 0; i < length; i++) {
            if (Object.keys(split).length == 1) {
                for (let k = 0; k < split.length; k++) {
                    if (split[k] != null) {
                        generator = split[k];
                        break;
                    }
                }
                break;
            }
            let zeros = 0,
                ones = 0;
            split.forEach(line => {
                if (parseInt(line[i]) === 0)
                    zeros++;
                else
                    ones++;
            });

            let common = zeros > ones ? 0 : 1;

            for (let k = 0; k < split.length; k++) {
                if (split[k] == null) continue;
                if (split[k][i] != common)
                    delete split[k];
            }
            console.log(split, Object.keys(split).length);

        }
        if (generator == null) {
            for (let k = 0; k < split.length; k++) {
                if (split[k] != null) {
                    generator = split[k];
                    break;
                }
            }
        }
        split = splCopy;
        for (let i = 0; i < length; i++) {
            if (Object.keys(split).length == 1) {
                for (let k = 0; k < split.length; k++) {
                    if (split[k] != null) {
                        scrubber = split[k];
                        break;
                    }
                }
                break;
            }
            let zeros = 0,
                ones = 0;
            split.forEach(line => {
                if (parseInt(line[i]) === 0)
                    zeros++;
                else
                    ones++;
            });

            let uncommon = zeros > ones ? 1 : 0;

            for (let k = 0; k < split.length; k++) {
                if (split[k] == null) continue;
                if (split[k][i] != uncommon)
                    delete split[k];
            }

        }
        if (scrubber == null) {
            for (let k = 0; k < split.length; k++) {
                if (split[k] != null) {
                    scrubber = split[k];
                    break;
                }
            }
        }
        console.log(generator, scrubber);
        //convert binary to decimal
        let generatorDec = 0,
            scrubberDec = 0;
        for (let i = 0; i < generator.length; i++) {
            generatorDec += generator[i] * Math.pow(2, generator.length - i - 1);
            scrubberDec += scrubber[i] * Math.pow(2, scrubber.length - i - 1);
        }
        console.log('Answer to part 2: ' + (generatorDec * scrubberDec));
    }
}