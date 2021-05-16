var Person = (function() {
    function Person(name) {
        this.getName = function() {
            return name;
        };
    }

    return Person;
}());

var p = new Person("John");
console.log('Person 2 name: ' + p.getName());
delete p.name;
console.log('Person 2 name: ' + p.getName() + ' stays private');
