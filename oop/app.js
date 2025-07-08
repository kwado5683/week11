

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  
    poop() {
      console.log(`${this.name} poops.`);
    }
  }

  class Human {
    constructor(name){
        this.name = name;

    }
    speak(){
        console.log(`${this.name} speaks`);
    }
    movement(){
        console.log(`${this.name} can walk as movement`);
    }

  }

  const animal = new Animal("dog");
  
  class Dog extends Animal{
    speak() {
        console.log(`${this.name} barks`)
    }
  }

  const dog = new Dog ("rex");

  console.log ( dog.speak())

class FlyAnimal extends Animal{
    fly(){
        console.log(`${this.name} flies`);
    }
}

const flyanimal = new FlyAnimal("pigeon")

console.log(flyanimal.fly())



class GameItem {
    constructor(name) {
        this.name = name;
    }
}


class Weapon extends GameItem{
    constructor(name, damage, defence) {
        this.name = name;
        this.damage = damage;
        this.defemce = defence;
    }
    
}