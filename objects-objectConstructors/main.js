const myObj = {
    property: 'Value',
    otherProperty: 77,
    "obnoxious property": function(){
        //do stuff!
    }
}

// dor notation
myObj.property // 'Value'

// bracket notation
myObj["obnoxious property"] // [Function]
/*  For example, myObject."obnoxious property" won’t work because that property is a string with a space in it. Likewise, you cannot use variables in dot notation: */

/* sssssssssssssssssssssssssssssssssssssssssssssss */

const playerOneName = 'tim'
const playerTwoName = 'jenn'
const playerOneMarker = 'X'
const playerTwoMarker = 'O'

const playerOne = {
    name:'tim',
    marker: 'X'
}
const playerTwo = {
    name: 'jenn',
    marker: 'O'
}

function printName(player){
    console.log(player.name);
};

function gameOver(winningPlayer){
    console.log("Congratulations!");
    console.log(winningPlayer.name + ' is the winner!');
}

/* object constructors */

function Player(name,marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(name);
    }
}

const player = new Player('steve','X')
console.log(player.name); // 'steve'
/* eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee */

function Book(title,author,pages,isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${isRead ? 'readed!':'not read yet!'}`
    }
}

const hobbit = new Book('hobbit', 'jj', 45 , false);

console.log(hobbit.info());
console.log(Object.getPrototypeOf(Book));
Book.prototype.isIn = () =>{
    console.log('Book not availabel');
}
hobbit.isIn();

/* eeeeeeeeeeeeeeeeeeeeeeeeeee */

function Personn(name){
    this.name = name;
}
Personn.prototype.sayName = function(){
    console.log(`I'm ${this.name}`);
}

function Playerr(name,marker){
    this.name = name;
    this.marker = marker;  
}

Playerr.prototype.getMarker = function(){
    console.log(`my marker is ${this.marker}`);
}
Object.getPrototypeOf(Playerr.prototype) // return Object. prototype

// 'Player' object inherit from 'Person'
Object.setPrototypeOf(Playerr.prototype,Personn.prototype)

Object.getPrototypeOf(Player.prototype) // returns Person.prototype

const player11 = new Player('steve','X')
const player12 = new Player('also steve','O')

player11.sayName()
player12.getMarker()