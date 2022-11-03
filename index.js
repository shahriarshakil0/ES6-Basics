
//**************************************************This******************************************

const person = {
    name:'Shakil',
    move(){"Shakil can move all around"},
    eat(){console.log("Shakil can eat rice")}
};


console.log(person.name);
person.eat();


//**************************************************Arrow******************************************

const square = function(number){
    return number*number;
}

console.log(square(5));


//**************************************************withour parameter******************************************

const minus = () => 8-3;

console.log(minus());


//**************************************************with parameter******************************************

const add= num => num+num;

console.log(add(5));


const jobs = [
    {id:1,isActive: true},
    {id:2,isActive: true},
    {id:3,isActive: false}
];


const result = jobs.filter(jobs => jobs.isActive);
console.log(result);



//**************************************************This and Arrow******************************************

const person1 = {
    talk(){
        console.log('this',this);
    }
};

person1.talk();



//**************************************************Arrow.map()******************************************

const colors = ['red','green','blue'];

const item = colors.map(color => `<li>${color}</li>`);
console.log(item);



//**************************************************Object Destructuring******************************************

const address = {
    street:'Dhanmondi',
    city:'Dhaka',
    country:'Bangladesh'
};

const {street} = address;
const {city:lo} = address;

console.log(street);
console.log(lo);

//Spread Operator

const first =[1,2,3];
const second = [4,5,6];

const combined = [...first,'a',...second];
console.log(combined);


const third={name:'Shakil'};
const fourth={job:'instructor'};

const combined1 = {...third,course:'React Js.',...fourth};
console.log(combined1);



//**************************************************Classes******************************************


class Person{
constructor(name){
    this.name = name;
}

    walk(){
        console.log("I can walk");
    }
 }

//  const p = new Person('Shahriar');
//  p.walk();
//  console.log(p.name);

class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree = degree;
    }
    teach(){
        console.log("Teach");
    }
}

const t = new Teacher("Shakil","B.Sc.");
t.teach();
t.walk();



//**************************************************Modules******************************************
// import { add } from "./person";
// add();
// import { Teacher1 } from "./teacher";
// import { Person1 } from "./person";
