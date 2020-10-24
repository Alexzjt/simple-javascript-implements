function Parent(name) {
    this.name = name;
}

Parent.prototype.sayHi = function () {
    console.log(this.name)
};

function Child(name, milk) {
    this.milk = milk;
    Parent.call(this, name);
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

