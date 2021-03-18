// const personName = 'John';
// document.body.innerHTML = `<h1>Hello ${personName}</h1>`

class Person{
    name:string;
    surname:string;
    age:number;

    constructor(name:string, surname:string, age:number){
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
}

let p = new Person("John","Blake",11);

const Show = () => {
    console.log(`Witaj ${p.name} ${p.surname}  ", mam "  ${p.age} + " lat"`);
}
Show();