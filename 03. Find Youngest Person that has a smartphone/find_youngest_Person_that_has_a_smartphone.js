'use strict';

function findYoungestPerson(array)  {
    var hasSmartphone = [];

    array.forEach(function(element) {
        if (element.hasSmartphone) {
            hasSmartphone.push(element);
        }
    });

    var youngest = {
        firstName: 'No name',
        lastname: 'No name',
        age: Number.MAX_VALUE
    };

    hasSmartphone.forEach(function(element) {
        if (element.age < youngest.age) {
            youngest.age = element.age;
            youngest.firstName = element.firstname;
            youngest.lastname = element.lastname;
        }
    });

    console.log('The youngest person is ' + youngest.firstName + ' ' + youngest.lastname);
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
    ];

findYoungestPerson(people);