var registry = require('./registry');

/**
Template Literals
=================
Write a function that prints out the given name in a sentence,
using template strings.
**/

var msg = function(name) {
  let tmpl = `Howdy ${name}!`;
  console.log(tmpl);
};

//msg('Lars')


/**
Default parameters
==================
Add a default name to the function from the previous task.

Call the function with different inputs, and no inputs.
**/

function replacer(subs = 'krutt') {
    return "Framførr tinget der dem satt, … Joik har større kraft enn " + subs;
}

//console.log(replacer('dynamitt'));

/**
Arrow functions
===============
Using the provided array of reindeer owners,
find and show owners that has a firstName of “Mikkel”.
**/

var mikkels = registry.filter(
  o => o.firstName === 'Mikkel'
);

/*mikkels.forEach(o => {
  console.log(o.firstName + ' ' + o.lastName)
});*/


/**
Destructuring
=============
Create a printOwner function.
It should print the full name of all reindeer owners.

Use destructuring (and forEach).
**/

function printOwner(owners) {
  owners.forEach(({firstName, lastName}) => {
    console.log(firstName + ' ' + lastName);
  });
}

//printOwner(registry);

/**
Rest parameters
===============
Create a function that takes in any number of places as arguments and finds the
Reindeer owners in that place.
**/

//Helper function
/*
 * Takes an element and an array and returns
 * true if the array contains the element.
 */
var contains = (list, element) => {
    return list.some(value => {
      return value === element;
    });
};

function findOwnersFrom(...places) {
    return registry.filter(owner => {
        return contains(places, owner.place);
    });
}

//console.log('Owners from Trofors: ' + findOwnersFrom('Trofors').length);

/**
Spread operator
===============
Add two new Reindeer owners to the list of reindeer owners.
**/

var newOwners = [
  {
    id: 1,
    cutId: 1,
    area: 10,
    district: 60,
    firstName: 'Pål',
    lastName: 'Ruud',
    address: 'Tøyen',
    place: 'Oslo',
    c1: 'a',
    c2: 'u',
    c3: '',
    c4: 'bo',
    c5: 't',
    c6: 'a'
  },
  {
    id: 2,
    cutId: 2,
    area: 10,
    district: 60,
    firstName: 'Lars',
    lastName: 'Barlindhaug',
    address: 'Dælenenga',
    place: 'Oslo',
    c1: 'a',
    c2: 't',
    c3: 'd',
    c4: 'gg',
    c5: 'q',
    c6: 'c'
  }];

//console.log('Reindeer owners: ' + registry.length);

registry.push(...newOwners);

//console.log('Reindeer owners:' + registry.length);


/**
Generators
==========
Create a generator that returns numbers in the Fibonacci number sequence.
(1, 1, 2, 3, 5…)

Extra task:
Create a “Mikkel” generator, returning owners with the firstName of Mikkel.
**/

function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

var fib = fibonacci();

/*console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());
console.log(fib.next());*/
