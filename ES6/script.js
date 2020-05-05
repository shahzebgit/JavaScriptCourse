//ES6
// const used so so that variable value can't change
// let is used when we want to mutate variable or anything
// var is function-scoped in ES5 whereas
//  let is block-scoped in ES6


// Blocks and IIFEs (Immediate Invoke Fucntion)
//ES6

{
    const a= 1;
    let b = 2;
    var c = 3;
}
// console.log(c);




// // ES5 IIFE
(function() {
    var c1 = 3;
    
})();
// console.log(c1);


// Strings

let myName = 'Shahzeb';
let mySurName = 'Parkar';
const dateOfBirth = 1997;

function calcAge(year) {
    return 2019-year;
}


// ES5
// console.log('This is ' + myName + " "+mySurName + " i am this year old "+ dateOfBirth);

// ES6
// console.log(`This is ${myName} ${mySurName}. I'm this year old ${calcAge(dateOfBirth)}`);


// const a = `${myName} ${mySurName}`;
// console.log(a.startsWith('Shahzeb'));
// console.log(a.endsWith('r'));
// console.log(a.includes('a'));
// console.log(`${myName} `.repeat());


// Arrow Functions
const years = [2000, 2001, 2005, 2013, 2015,2018,2019];
 
// ES5
    var ages5 = years.map(function(el) {
        return 2019 - el;
    });
// console.log(ages5);
// ES6

let ages6 = years.map(el => 2019 - el);
// console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1} :${2019 - el}.`);
// console.log(ages6);


//Arrow function 2 {this keyword} Lexical

// ES5
var box5 ={
    color: 'blue',
    position: 2,
    clickMe: function () {
        
        var self = this;
        document.querySelector('.blue').addEventListener('click', function () {
            var str ='This is box number '+ self.position +' and it is '+ self.color;
            alert(str);
        });
    }
}
// box5.clickMe();

// ES6
const box6 ={
    color: 'blue',
    position: 2,
    clickMe: function () {
    
        document.querySelector('.blue').addEventListener('click', () => {
            let str ='This is box number '+ this.position +' and it is '+ this.color;
            alert(str);
        });
    }
} 
// box6.clickMe();



function Person(name){
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
    
    var  r = friends.map(function (el) 
    {
        return this.name + ' is friends with ' + el;   
    }.bind(this));

    // console.log(r);
    
}

var friends =['Shahzeb','Aveon','Mark'];
new Person('Pallavi').myFriends5(friends);


// ES6
Person.prototype.myFriends6 = function (friends) {
    
    var  r1 = friends.map(el => `${this.name} is friends with ${el}`);
    
    // console.log(r1);
    
}
new 
Person('Pallavi').myFriends6(friends);

// ES6 arrow function
const todos =[{
    title: 'My first arrow functions',
    isDone:false
}, {
    title:'Almost comepleted',
    isDone:false
}, {
    title:'Near to it :p',
    isDone:true
}, {
    title:'Good afternoon',
    isDone:false
}, {
    title:'Well done',
    isDone:true
}, {
    title:'very cool',
    isDone:true
}]


// const thingsDone = todos.filter((todo) => todo.isDone === true && console.log(todo.title));

const notDone = todos.filter((todo) => {todo.isDone === false 
   && console.log(todo.title)});

