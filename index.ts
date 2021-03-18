class Person{
    name:string;
    surname:string;
    age:number;

    constructor(name:string, surname:string, age:number){
        this.name  = name;
        this.surname = surname;
        this.age = age;
    }
}

let p = new Person("John","Blake",11);

 function Show(){
     document.body.innerHTML = `<h1>Hello, my name is ${p.name} ${p.surname}, and i am ${p.age} years old</h1>`
 }
 Show();
