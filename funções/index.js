// Declaração de função (function hoisting)
sayHi()
function sayHi() {
    console.log('Hello World!');
}

// first-class objetcts (objetos de primeira classe)
// function expression
function data(){
    console.log('here is a data');
};

function otherFunction(fun) {
    fun()
}
otherFunction(data);

// Arrow function 
const arrow = () =>{
    console.log("i'm a arrow Function");
};
arrow()

// Dentro de um objeto 
const obj = {
    say: function() {
        console.log('talking in a object');
    }
};
obj.say();