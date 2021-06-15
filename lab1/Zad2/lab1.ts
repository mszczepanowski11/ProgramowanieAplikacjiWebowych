interface Person {
    // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
        name:string;
        surname:string;
        age:number;
        role:string;
    }
    
    const users: Person[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: Person[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(persons: Person[]) {
        users.forEach(user => {
            console.log(user);
        })
    
        admins.forEach(admin =>{
            console.log(admin);
        })
    }

    function filterPersons(persons: Person[], criteria: any): Person[] {
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
        persons = [...users,...admins]
        persons.filter
        // persons.forEach(person => {
        //     console.log(person)
        // })
        criteria = persons.filter(person => person.age > 25);
        //criteria = persons.filter(person => person.name == 'Adam')
        return criteria;
    }

    
    
    // TODO:    
    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });