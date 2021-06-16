import {FizzBuzz} from './fizzbuzz'

describe('FizzBuzz',() =>{
    let fizzBuzz:FizzBuzz

    beforeEach(() =>{
        fizzBuzz = new FizzBuzz()
    })

    it('should return the string "Fizz" if the number is divisible by 3', () => {
		expect(fizzBuzz).toBeInstanceOf(FizzBuzz);
		expect(fizzBuzz.fizzBuzz(3)).toEqual('Fizz');
	});

	it('should return the string "Buzz" if the number is divisible by 5', () => {
		expect(fizzBuzz).toBeInstanceOf(FizzBuzz);
		expect(fizzBuzz.fizzBuzz(5)).toEqual('Buzz');
	});

	it('should return the string "Fizz Buzz" if the number is divisible by 3 and 5', () => {
		expect(fizzBuzz).toBeInstanceOf(FizzBuzz);
		expect(fizzBuzz.fizzBuzz(15)).toEqual('Fizz Buzz');
	});
})