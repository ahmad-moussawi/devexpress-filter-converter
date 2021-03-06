var isArray = value => Array.isArray(value);
var isString = value => typeof value === 'string';
var isLeaf = value => isArray(value) && value.length === 3 && isString(value[0]) && isString(value[1]) && !isArray(value[2]);

var simplifySingle = (array, boolean) => {
    var filtered = array.filter(x => isArray(x));

    if (filtered.length === 0) {
        return null;
    }

    return filtered.length === 1 ? convert(array[0]) : {
        booleanOperator: boolean,
        conditions: filtered.map(x => convert(x)).filter(x => x !== null),
    };
}

function convert(input) {

    // stop when receiving a plain value.
    // no further processing needed
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

    // when we face mixed operators we split on the OR
    // since AND have higher precedence
    if (mixed) {
        return simplifySingle([
            input.slice(0, orPosition),
            input.slice(orPosition + 1)
        ], 'or');
    }

    return simplifySingle(input, orPosition > -1 ? 'or' : 'and');

}

module.exports.convert = convert;