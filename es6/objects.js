// var person={
//     firstName:"Rupesh",
//    // firstName:"nithesh",
//     sayName(){
//         console.log(this.firstName);
//     }
// };
// console.log(person.firstName);
// person.sayName();

//New methods

// console.log(Object.is(9,9));
// console.log(NaN===NaN);
// console.log(Object.is(NaN,NaN));

// console.log(Object.is(+0,-0));
// console.log(+0===-0);

//Object assign method

// var person={
//     name:"rupesh",
//     age:22,
//     sayName(){
//         console.log("this is a method");
//     }
// }
// person.firstName="Nitheesh";
// var cloneRupesh={};
// Object.assign(cloneRupesh,person);

// person.sayName();
// cloneRupesh.sayName();
// console.log(Object.getOwnPropertyNames(person));

var Person={
    name:"Rupesh",
    sayName(){
        return "Hello from Rupesh"
    }
}
var Robot={
    name:"Robot",
    sayName(){
        return super.sayName()+"hi"
    }
}
Object.setPrototypeOf(Robot,Person);

let person1=Object.create(Robot);
console.log(person1.sayName())

console.log(Robot.sayName());