var Person = (function() {
    var private = new WeakMap();

    function Person(name) {
        var privateProperties = {
            test: name
        };
        private.set(this, privateProperties);
        console.log('this here is :' + this);
    }

    Person.prototype.compareTo = function(other) {
        var thisName = private.get(this).test;
        var otherName = private.get(other).test;
        return thisName.localeCompare(otherName);
    };

    Person.prototype.toString = function() {
        return private.get(this).test;
    }

    return Person;
}());

var people = [
    new Person('Choi'),
    new Person('Narai'),
    new Person('Jim')
];

people.sort(function(first, second) {
    return first.compareTo(second);
});

console.log('Sorted people: ' + people.join(', '));