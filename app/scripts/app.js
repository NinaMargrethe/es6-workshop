var registry = require('./registry');

/**
Default parameters
==================
Create a function that logs out the text for the Norwegian entry in the
Eurovision Song Contest 1980, «Sámiid Ædnan»,
with the word “krutt” replaceable by an argument given to the function.

Call the function with different inputs, and no inputs.
**/


/**
Arrow functions
===============
Using the provided array of reindeer owners,
find and show owners that has a firstName of “Mikkel”.
**/


/**
Destructuring
=============
Create a printOwner function.
It should print the full name of all reindeer owners.

Use destructuring (and forEach).
**/

/**
Rest parameters
===============
Create a function that takes in any number of places as arguments and finds the
Reindeer owners in that place.
**/

/**
Spread operator
===============
Add two new Reindeer owners to the list of reindeer owners.
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


/**
Template Literals
=================
Write a function that prints out the given name in a sentence,
using template strings.
**/


/**
Generators
==========
Create a generator that returns numbers in the Fibonacci number sequence.
(1, 1, 2, 3, 5…)

Extra task:
Create a “Mikkel” generator, returning owners with the firstName of Mikkel.
**/

