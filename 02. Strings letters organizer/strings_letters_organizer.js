'use strict';

function sortLetters(string, boolean) {
    var array = string.split('');
    array.sort(function(a,b) {
        if (boolean) {
            return a.toLowerCase() > b.toLowerCase();
        } else {
            return a.toLowerCase() < b.toLowerCase();
        }
    });

    console.log(array.join(''));
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);