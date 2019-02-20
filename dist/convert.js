"use strict";
var isArray = function (value) { return Array.isArray(value); };
var isString = function (value) { return typeof value === 'string'; };
var isLeaf = function (value) { return isArray(value) && value.length === 3 && isString(value[0]) && isString(value[1]) && !isArray(value[2]); };
var simplifySingle = function (array, boolean) {
    var filtered = array.filter(function (x) { return isArray(x); });
    if (filtered.length === 0) {
        return null;
    }
    return filtered.length === 1 ? transform(array[0]) : {
        booleanOperator: boolean,
        conditions: filtered.map(function (x) { return transform(x); }).filter(function (x) { return x !== null; }),
    };
};
function transform(input) {
    if (!isArray(input)) {
        return input;
    }
    if (isLeaf(input)) {
        return {
            left: input[0],
            op: input[1],
            right: input[2]
        };
    }
    var orPosition = input.indexOf('or');
    var andPosition = input.indexOf('and');
    var mixed = orPosition > -1 && andPosition > -1;
    if (mixed) {
        return simplifySingle([
            input.slice(0, orPosition),
            input.slice(orPosition + 1)
        ], 'or');
    }
    return simplifySingle(input, orPosition > -1 ? 'or' : 'and');
}
module.exports.transform = transform;
//# sourceMappingURL=convert.js.map