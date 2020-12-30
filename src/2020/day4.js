module.exports = {

    part1: function(contents, split) {
        let passports = [];
        let passport = {};
        for(let line of split) {
            if(line == '') {
                passports.push(passport);
                passport = {};
                continue;
            }
            let spl = line.split(' ');
            for(let keyVal of spl) {
                keyVal = keyVal.split(':');
                passport[keyVal[0]] = keyVal[1];
            }
        }
        passports.push(passport);
        console.log('Answer to part1: '+passports.filter(this.accepted).length);
    },

    accepted: function(passport) {
        return passport['byr']
            && passport['iyr']
            && passport['eyr']
            && passport['hgt']
            && passport['hcl']
            && passport['ecl']
            && passport['pid'];
    },

    accepted2: function(passport) {
        let eyeColors = [ 'amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth' ];
        let byr = passport['byr'];
        let iyr = passport['iyr'];
        let eyr = passport['eyr'];
        let hgt = passport['hgt'];
        let hcl = passport['hcl'];
        let ecl = passport['ecl'];
        let pid = passport['pid'];
        if(!byr || !byr.match(/^\d{4}$/)) return false;
        if(!iyr || !iyr.match(/^\d{4}$/)) return false;
        if(!eyr || !eyr.match(/^\d{4}$/)) return false;
        if(!hgt || !hgt.match(/^\d+(in)|(cm)$/)) return false;
        if(!hcl || !hcl.match(/^\#[a-f0-9]{6}$/)) return false;
        if(!ecl || !eyeColors.includes(ecl)) return false;
        if(!pid || !pid.match(/^\d{9}$/)) return false;
        byr = parseInt(byr);
        iyr = parseInt(iyr);
        eyr = parseInt(eyr);
        if(byr < 1920 || byr > 2002) return false;
        if(iyr < 2010 || iyr > 2020) return false;
        if(eyr < 2020 || eyr > 2030) return false;
        let height;
        if(hgt.includes('in')) {
            height = parseInt(hgt.replace('in', ''));
            if(height < 59 || height > 76)
                return false;
        } else if(hgt.includes('cm')) {
            height = parseInt(hgt.replace('cm', ''));
            if(height < 150 || height > 193)
                return false;
        } else return false;
        return true;
    },

    part2: function(contents, split) {
        let passports = [];
        let passport = {};
        for(let line of split) {
            if(line == '') {
                passports.push(passport);
                passport = {};
                continue;
            }
            let spl = line.split(' ');
            for(let keyVal of spl) {
                keyVal = keyVal.split(':');
                passport[keyVal[0]] = keyVal[1];
            }
        }
        passports.push(passport);
        console.log('Answer to part2: '+passports.filter(this.accepted2).length);
    },

};