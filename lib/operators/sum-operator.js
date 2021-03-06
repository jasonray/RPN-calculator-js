/*jslint node: true */
'use strict';

module.exports = function (numbers) {
    let sum = 0;

    while (!numbers.isEmpty()) {
        sum = sum + numbers.pop();
    }

    numbers.push(sum);
    return sum;
};