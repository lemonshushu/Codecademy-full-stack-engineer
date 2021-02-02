
const _ = {
    clamp(num, lower, upper) {
        const lowerClampedValue = Math.max(num, lower);
        const clampedValue = Math.min(lowerClampedValue, upper);
        return clampedValue;
    },
    inRange(number, start, end) {
        let realStart, realEnd;
        if (end === undefined) {
            realStart = 0;
            realEnd = start;
        } else if (start > end) {
            realStart = end;
            realEnd = start;
        } else {
            realStart = start;
            realEnd = end;
        }
        if (number < realStart || number >= realEnd) return false;
        else return true;
    },
    words(string){
        return string.split(' ');
    },
    pad(string, length) {
        const isOdd = (length - string.length) % 2;
        const padding = ' '.repeat((length - string.length) / 2);
        let result = padding + string + padding;
        if (isOdd === 1) result += ' ';
        return result;
    },
    has(object, key){
        for (let currKey in object) if (currKey===key) return true;
        return false;
    },
    invert(object) {
        newObject = {};
        for (let key in object) {
            newObject[object[key]] = key;
        }
        return newObject;
    },
    findKey(object, predicate) {
        for (let key in object) {
            if (predicate(object[key])) return key;
        }
        return undefined;
    },
    drop (array, number) {
        let result = array;
        const drops = (number === undefined) ? 1 : number;
        for (let i = 0 ; i < drops; i++) result.shift();
        return result;
    },
    dropWhile(array, predicate) {
        let result = array;
        let i = 0
        while (predicate(array[i], i, array)) {
            result.shift();
            i++;
        }
        result.shift();
        return result;
    },
    chunk(array, size=1) {
        let resultArr = [];
        let newArr = [];
        let i;
        for (i = 0 ; i < array.length; i++) {
            newArr.push(array[i]);
            if (i % size === size - 1) {
                resultArr.push(newArr);
                newArr = [];
            }
        }
        if (i % size != 0) resultArr.push(newArr);
        return resultArr;
    }
};



// Do not write or modify code below this line.
module.exports = _;