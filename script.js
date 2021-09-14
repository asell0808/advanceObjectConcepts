// 3 object concepts
// 1. reference type
var object1 = {value:10};
var object2 = object1;
var object3 = {value: 10};

object1 == object2;
//true

object1 == object3;
//false


// 2. context
// context will occaisionally get confused with scope
// context tells you were you are within the object
console.log(this);
// 'this' is the window object.
this.alert('hello');

window.alert('hello') == this.alert('hello');

function a(){
    console.log(this);
}

a();
// the window object will still be called

window.a();

// to create a new value for 'this'
const object4 = {
    a: function(){
        console.log(this);
    }
}
// this sets 'this' == object4


// 3. instantiation
// makes a copy of an object that reuses the same code as the original
// ex. multiplayer objects in a video game

