  import Animal from './animal';
  import Horse  from './horse';
  import Snake  from './snake';
  
  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");
    
  console.log(sam.move());
  console.log(tom.move(34))
  