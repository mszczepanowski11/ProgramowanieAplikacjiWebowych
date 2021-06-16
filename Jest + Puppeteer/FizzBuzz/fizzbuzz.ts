export class FizzBuzz {
    fizzBuzz(number: number){
        if(number % 3 === 0)
            return 'Fizz'
        if(number % 5 === 0)
            return 'Buzz'
         if(number % 15 === 0)
            return 'Fizz Buzz'
        
        return number   
    }
}