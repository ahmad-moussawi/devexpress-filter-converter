var convert = require('./convert').convert;

var e = [
    [
        [
            "name",
            "contains",
            "bu"
        ],
        "and",
        [
            "lname",
            "contains",
            "cc"
        ],
        "and",
        [
            "age",
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

e = ['name', '=', 'value'];

e = [
    "name", "=", "hello"
]

console.log('----')
console.log(JSON.stringify(convert(e), null, ' '));

