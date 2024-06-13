// let obj = {
//     a: 1,
//     b: "nikhil"
// }
// console.log(obj)

// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps:true
// };  

// rabbit.__proto__ = animal;    

class Animal{
    constructor(name){
        this.name = name
        console.log("object is created...   ")
    }


eats(){
    console.log("kha rha hu")
}
jumps(){
    console.log("kood rha hu")
}
}

class lion extends Animal {
    constructor(name){
        super(name) 
        console.log("object is creaated but he is a lion..")
    }

    eats(){
        super.eats()
        console.log("Kha raha hoon roar")
    }
}

let a = new Animal("nikku");
console.log(a)

let l = new lion ("shera")
console.log(l)