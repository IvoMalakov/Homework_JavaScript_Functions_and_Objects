"use strict";

function extractObject(array) {
    var filtred = [];
    input.forEach(function(element) {
        var type = typeof(element);
        var isObjest = (type === 'object');
        var isArray = element instanceof Array;

        if (isObjest && !isArray) {
            filtred.push(element);
        }
    })

    print(filtred);
};

function print(filtred) {
    filtred.forEach(function(element) {
        console.log(element);
    })
};

var input = [
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

extractObject(input);