var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    return Person;
}());
var p = new Person("John", "Blake", 11);
function Show() {
    document.body.innerHTML = "<h1>Hello, my name is " + p.name + " " + p.surname + ", and I am " + p.age + " years old</h1>";
}
Show();
