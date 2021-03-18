// const personName = 'John';
// document.body.innerHTML = `<h1>Hello ${personName}</h1>`
var Person = (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    return Person;
})();
var p = new Person("John", "Blake", 11);
const Show = () => {
    return "Witaj " + p.name + " " + p.surname + ", mam " + p.age + " lat";
}
Show();
document.getElementById('header').innerHTML = Show();