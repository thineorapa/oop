// console.log("hello world");

// object literal
// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     draw: function() {
//         console.log('draw');
//     }
// };

// circle.draw();

// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);
// circle.draw();


// Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const another = new Circle(1);
// another.draw();

// Class Constructor
// class User {
//     constructor(email, name) {
//         this.email = email;
//         this.name = name;
//     }
// }

// let userOne = new User('thine@gmail.com', 'thine');
// let userTwo = new User('mae@gmail.com', 'mae');

// console.log(userOne);
// console.log(userTwo);

// Class Method and Method Chaining
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.name, 'score now is ', this.score);
        return this;
    }
}

let userOne = new User('thine@gmail.com', 'thine');
let userTwo = new User('mae@gmail.com', 'mae');

userOne.login().updateScore().updateScore().logout(); //chain method


// Class Inheritance
class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

let admin = new Admin('tin@gmail.com', 'tin');
let users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
admin.deleteUser(userOne);

console.log(users);

// RECURSION
function printNos(n) {
    if (n > 0) {
        printNos(n - 1);
        console.log("number ", n);
    }
    return;
}

printNos(10);


let countdown = function (value) {
    if (value > 0) {
        console.log(value);
        return countdown(value - 1);
    } else {
        return value;
    }
};
countdown(10);

// factorial recursion
let factorial = function (number) {
    if (number <= 0) { // terminal case
        return 1;
    } else { // block to execute
        return (number * factorial(number - 1));
    }
};
console.log(factorial(6));
// 720

// odd/even number without using conditional statement
let arr = ["Even", "Odd"];
let input = 3;
console.log(input, 'is', arr[input % 2]);


