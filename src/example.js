var transform = require('./transform').transform;

var e = [
    [
        [
            "businessUnitName",
            "contains",
            "bu"
        ],
        "and",
        [
            "companyName",
            "contains",
            "cc"
        ],
        "and",
        [
            "companyCountryName",
            "contains",
            "sdsd"
        ]
    ],
    "and",
    [
        [
            "date",
            ">=",
            "2019-02-18T00:00:00"
        ],
        "and",
        [
            "date",
            "<",
            "2019-02-19T00:00:00"
        ]
    ]
];

e = [
    ['col', 'contains', 'value'],
    'or',
    [
        ['name', '=', 'value'],
        'or',
        ['lname', '=', 'value2'],
    ],
    'or',
    ['col2', '=', 'value'],
    'or',
    ['col3', '=', 'value3'],
];

console.log('----')
console.log(JSON.stringify(transform(e), null, ' '));

