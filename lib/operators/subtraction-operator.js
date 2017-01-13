/*jslint node: true */
'use strict';

var binaryOperation = require('./binary-operator');

module.exports = function(numbers) {
    return binaryOperation(numbers, subtract);

    function subtract(lhs, rhs) {
        return lhs - rhs;
    }
};