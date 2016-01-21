'use strict';

function countDivs(html) {
    var match = html.match(/(<\w+.*?)/g),
        unique,
        result;

    if (match === null) {
        result = 0;
    } else {
        unique = match.filter(onlyUnique);
        result = unique.length;
    }

    document.getElementById('result').value = result;
};

function onlyUnique(elementFromArray, indexofelement, array) {
    return array.indexOf(elementFromArray) === indexofelement;
};