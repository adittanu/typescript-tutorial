var character = 'mario';
var age = 30;
var isBlackBelt = false;
// character = 20;
character = 'luigi';
age = 40;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
var names = ['luigi', 'mario', 'yoshi'];
// names = 'names';
names.push('toad');
// names.push(3);
// names[0] = 3
var numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers.push('shaun')
var mixed = ['ken', 4, 'chun-li', 8, 9, true];
mixed.push(34);
mixed.push('ryu');
mixed[0] = 3;
// objects 
var ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];
ninja = {
    name: 'yoshi',
    belt: 'black',
    age: 40
};
