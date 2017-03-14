// // goal - understand callbacks
// // goal - understand new syntax by creating one with timeout

// // old way
// function adder(i) {
//   return i + 1;
// }
// console.log(adder(1));



// // as callback
// function ajax(cb) {
//   setTimeout(function() {
//     console.log(cb(1));
//   },1000);
// }

//invoke old way
//ajax(adder);

// arrow version
//ajax(v => v + 1)

class Hello {
    constructor() {
        console.log('hello');
    }
    runner(cb) {
        setTimeout(function() {
            console.log(cb(2));
        }, 2000);
    }
}

// var a = new Hello();
// a.runner(f => f - 1);

class World extends Hello {
    constructor() {
        super();
        console.log('world');
    }
    get exclaim() {
        return this._exclaim;
    }
    set exclaim(arg) {
        this._exclaim = arg;
    }
    static CallMeArg(arg) {
        console.log(arg);
    }
    static CallMe() {
        console.log('i\'m static');
    }
}

var a = new World();
a.exclaim = 'wow';
console.log(a.exclaim);
World.CallMe();
World.CallMeArg('calling');

